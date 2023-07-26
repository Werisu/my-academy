import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  SnapshotAction,
} from '@angular/fire/compat/database';
import { Timestamp } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { CheckListRoot, CheckLists } from './checklist';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { listStateTrigger } from 'src/app/animations/animation';

@Component({
  selector: 'app-lista-pre-treino',
  templateUrl: './lista-pre-treino.component.html',
  styleUrls: ['./lista-pre-treino.component.css'],
  animations: [listStateTrigger],
})
export class ListaPreTreinoComponent implements OnInit {
  public dateCurrent = new Date();
  dateTes = this.dateCurrent.setDate(this.dateCurrent.getDate() + 1);
  timestamp = Timestamp.fromDate(new Date());
  getTimestamp = this.timestamp.toDate();
  checkInput = false;

  checklist = [
    {
      order: 8,
      description: 'Coma bem antes do treino, pois você gasta bastante energia',
      check: true,
    },
    {
      order: 7,
      description:
        'Depois de comer, dê um tempo para digerir essa refeição. Entre 1h a 3h dependendo da refeição',
      check: false,
    },
    {
      order: 6,
      description:
        'Consuma beta alanina e treine realmente forte, caso contrário, ela não será usada pelo organismo',
      check: false,
    },
    {
      order: 5,
      description:
        'Se prepare pro treino de forma inteligente, com roupas adequadas, garrafa de água, etc',
      check: false,
    },
    {
      order: 4,
      description:
        'Usar bicarbonato (?) sim, te deixa mais resistente pro treino, mas pode dar caganeira rsss',
      check: false,
    },
    {
      order: 3,
      description:
        'Tenha um planejamento de treino, visualize o treino e os resultados que você quer',
      check: false,
    },
    {
      order: 2,
      description:
        'Se possível, tire uma soneca de 15 minutos a 30 minutos antes do treino, e não mais que isso',
      check: false,
    },
    {
      order: 1,
      description:
        'Faça a porra do aquecimento direito, tanto aquecimento geral quanto aquecimento no próprio aparelho. Otimiza seu treino, dá mais energia, evita lesão e os resultados são melhores.',
      check: false,
    },
  ];

  listRef!: AngularFireList<CheckListRoot>;
  list$: Observable<CheckLists>;

  constructor(private database: AngularFireDatabase) {
    this.listRef = database.list('checklist');
    this.list$ = this.listRef
      .snapshotChanges()
      .pipe(
        map((changes: SnapshotAction<any>[]) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  ngOnInit(): void {
    this.initializeList();
  }

  initializeList(){
    this.list$.subscribe({
      next: (res:any) => {
        if (res.length === 0) {
          this.saveData();
        } else if (res.createdAt === this.timestamp){
          this.saveData();
        }
      },
      error: (err) => {},
    })
  }

  getList(){
    this.list$.subscribe({
      next: (res:any) => {

      },
      error: (err) => {},
    })
  }

  saveData() {
    this.listRef.push({ createdAt: this.timestamp, checklist: this.checklist }).then((res) => {
      // this.listRef.update(res.key!, { checklist: this.checklist });
    });
  }

  changeCheck(item: any, order: number, value: boolean) {
    console.log(order);

    this.database.object(`checklist/${item.key}/checklist/${order}/check`).set(value);
  }
}
