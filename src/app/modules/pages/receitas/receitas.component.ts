import { Component } from '@angular/core';
import { slideUpAnimation } from 'src/app/animations/animation';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css'],
  animations: [slideUpAnimation]
})
export class ReceitasComponent {

  receitas: any[] = [
    {
      nome: 'Frango Grelhado com Batata Doce',
      imagem: 'assets/caminho-da-imagem-do-frango-grelhado-com-batata-doce.jpeg',
      descricao: 'Uma receita deliciosa e rica em proteínas e carboidratos para ajudar no processo de hipertrofia muscular.',
      ingredientes: [
        '2 peitos de frango sem pele',
        '1 batata doce média',
        'Azeite de oliva',
        'Sal e pimenta a gosto',
        'Temperos a gosto (como alho, cebola em pó, páprica)'
      ],
      modoPreparo: [
        'Tempere os peitos de frango com sal, pimenta e os temperos de sua preferência.',
        'Aqueça uma frigideira com um pouco de azeite de oliva em fogo médio.',
        'Grelhe os peitos de frango na frigideira por cerca de 6 a 8 minutos de cada lado, ou até estarem completamente cozidos.',
        'Enquanto isso, corte a batata doce em rodelas ou cubos e cozinhe em água fervente até ficar macia.',
        'Escorra a batata doce e sirva junto com o frango grelhado.'
      ]
    },
    {
      nome: 'Shake de Proteína com Aveia',
      imagem: 'assets/caminho-da-imagem-do-shake-de-proteina-com-aveia.jpg',
      descricao: 'Um shake delicioso e nutritivo, ideal para o pós-treino e para estimular o ganho de massa muscular.',
      ingredientes: [
        '1 scoop de whey protein sabor baunilha',
        '200ml de leite desnatado ou leite vegetal',
        '2 colheres de sopa de aveia em flocos',
        '1 banana madura',
        'Gelo a gosto'
      ],
      modoPreparo: [
        'No liquidificador, adicione o leite, o whey protein, a aveia, a banana e o gelo.',
        'Bata tudo até obter uma mistura cremosa e homogênea.',
        'Sirva em um copo e aproveite.'
      ]
    },
    {
      nome: 'Omelete de Claras com Vegetais',
      imagem: 'assets/caminho-da-imagem-do-omelete-de-claras-com-vegetais.jpg',
      descricao: 'Um omelete saudável e proteico, repleto de vegetais nutritivos.',
      ingredientes: [
        '4 claras de ovo',
        '1/2 xícara de brócolis picado',
        '1/4 de pimentão vermelho picado',
        '1/4 de cebola picada',
        'Sal e pimenta a gosto'
      ],
      modoPreparo: [
        'Em uma tigela, misture as claras de ovo com os vegetais picados.',
        'Tempere com sal e pimenta a gosto.',
        'Aqueça uma frigideira antiaderente em fogo médio.',
        'Despeje a mistura na frigideira e cozinhe por cerca de 3 a 4 minutos de cada lado, ou até que o omelete esteja firme.',
        'Sirva quente e aproveite.'
      ]
    },
    {
      nome: 'Salada de Quinoa com Frango',
      imagem: 'assets/caminho-da-imagem-da-salada-de-quinoa-com-frango.jpg',
      descricao: 'Uma salada nutritiva e saborosa, que combina proteínas, carboidratos e vegetais.',
      ingredientes: [
        '100g de peito de frango cozido e desfiado',
        '1 xícara de quinoa cozida',
        '1/2 pepino em cubos',
        '1/2 tomate em cubos',
        'Folhas de alface a gosto',
        'Molho de sua preferência (opcional)'
      ],
      modoPreparo: [
        'Em uma tigela, misture o frango desfiado, a quinoa cozida, o pepino, o tomate e as folhas de alface.',
        'Se desejar, adicione molho de sua preferência e misture bem.',
        'Sirva frio e desfrute.'
      ]
    },
    {
      nome: 'Panquecas de Aveia e Banana',
      imagem: 'assets/caminho-da-imagem-das-panquecas-de-aveia-e-banana.jpg',
      descricao: 'Panquecas saudáveis e ricas em carboidratos, perfeitas para um café da manhã nutritivo.',
      ingredientes: [
        '1 banana madura amassada',
        '1 ovo',
        '1/2 xícara de aveia em flocos',
        '1 colher de chá de fermento em pó',
        '1/2 colher de chá de canela em pó (opcional)',
        'Óleo de coco ou manteiga para untar a frigideira'
      ],
      modoPreparo: [
        'Em uma tigela, misture a banana amassada, o ovo, a aveia, o fermento em pó e a canela (se desejar).',
        'Aqueça uma frigideira antiaderente em fogo médio-baixo e unte com óleo de coco ou manteiga.',
        'Despeje cerca de 1/4 de xícara da massa na frigideira para formar cada panqueca.',
        'Cozinhe por cerca de 2 a 3 minutos de cada lado, ou até que estejam douradas.',
        'Sirva as panquecas quentes, acompanhadas de frutas frescas, iogurte ou mel, se desejar.'
      ]
    },
    {
      nome: 'Salmão Assado com Legumes',
      imagem: 'assets/caminho-da-imagem-do-salmao-assado-com-legumes.jpg',
      descricao: 'Um prato completo e rico em ômega-3, proteínas e vitaminas, perfeito para uma refeição saudável e saborosa.',
      ingredientes: [
        '1 filé de salmão',
        '1 abobrinha em rodelas',
        '1 cenoura em rodelas',
        '1/2 pimentão em tiras',
        'Azeite de oliva',
        'Sal, pimenta e temperos a gosto'
      ],
      modoPreparo: [
        'Pré-aqueça o forno a 200°C.',
        'Em uma assadeira, coloque o filé de salmão no centro e disponha os legumes ao redor.',
        'Regue o salmão e os legumes com azeite de oliva e tempere com sal, pimenta e os temperos de sua preferência.',
        'Asse por cerca de 20 a 25 minutos, ou até que o salmão esteja cozido e os legumes estejam macios.',
        'Sirva quente e aproveite.'
      ]
    },
    // Adicione mais receitas aqui...
  ];

}
