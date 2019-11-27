import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
    keyframes,
  } from '@angular/animations';

  export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      group([
        query(':enter', [
          animate('500ms ease', keyframes([
            style({opacity: 0 }),
            style({ opacity: 100 }),
          ])),
        ]),
        query(':leave', [
          animate('500ms ease', keyframes([
            style({ opacity: 100, transform: 'scale(1) translateY(0)' }),
            style({ opacity: 75, transform: 'scale(2) translateY(0)' }),
            style({ opacity: 50, transform: 'scale(3) translateY(0)' }),
            style({ opacity: 25, transform: 'scale(4) translateY(0)' }),
            style({ opacity: 0, transform: 'scale(5) translateY(0)' }),
          ])),
        ])
      ]),
    ])
]);