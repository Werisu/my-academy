import { trigger, transition, style, animate, stagger, query } from "@angular/animations";

export const slideUpAnimation = trigger('slideUp', [
  transition(':enter', [
    query(':enter', [
      style({ transform: 'translateY(50%)', opacity: 0 }),
      stagger(100,
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      )
    ], { optional: true }),
  ])
]);

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }), // Define a opacidade inicial como 0
    animate('300ms', style({ opacity: 1 })) // Anima a opacidade para 1
  ]),
  transition(':leave', [
    animate('300ms', style({ opacity: 0 })) // Anima a opacidade para 0 ao sair
  ])
]);
