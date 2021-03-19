//disabled service

import { trigger, state, style, transition,
    animate, group
} from '@angular/animations';

export const SlideUpAnimation = [
    trigger('slideUp', [
        state('down', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        state('up', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('down => up', [group([
            animate('1s 0.3s ease-in-out', style({
                'opacity': '0'
            })),
            animate('1.8s ease-in-out', style({
                'max-height': '0px'
            })),
            animate('1s ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('up => down', [group([
            animate('1s ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('1.8s ease-in-out', style({
                'max-height': '500px'
            })),
            animate('1s 0.3s ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
]