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
