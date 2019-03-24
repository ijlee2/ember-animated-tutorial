import { Modifier } from 'ember-oo-modifiers';

const FadeUpModifier = Modifier.extend({
    didInsertElement(args, options) {
        this.element.animate(
            [
                { opacity: 0, transform: 'translateY(60px)' },
                { opacity: 1, transform: 'translateY(0px)' },
            ],
            {
                duration: options.duration || 2000,
                delay: options.delay || 0,
                easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
                fill: 'backwards',
            },
        );
    },
});

export default Modifier.modifier(FadeUpModifier);