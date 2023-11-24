import {
    BREAKPOINTS,
    COLORS,
    FONT_FAMILY,
    FONT_SIZE,
    LETTER_SPACING,
    LINE_HEIGHT,
    SPACING,
} from './core/config/tailwind';

// full list https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './core/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    ...COLORS.primary,
                    DEFAULT: COLORS.primary[300],
                },
                secondary: {
                    ...COLORS.secondary,
                    DEFAULT: COLORS.secondary[400],
                },
                neutral: {
                    ...COLORS.neutral,
                    DEFAULT: COLORS.neutral[400],
                },
                accent: {
                    eucalyptus: {
                        ...COLORS.accent.eucalyptus,
                        DEFAULT: COLORS.accent.eucalyptus[300],
                    },
                    saffron_mango: {
                        ...COLORS.accent.saffron_mango,
                        DEFAULT: COLORS.accent.saffron_mango[300],
                    },
                    red_orange: {
                        ...COLORS.accent.red_orange,
                        DEFAULT: COLORS.accent.red_orange[200],
                    },
                },
            },
            letterSpacing: LETTER_SPACING,
            lineHeight: LINE_HEIGHT,
            fontSize: FONT_SIZE,
            fontFamily: FONT_FAMILY,
            spacing: SPACING,
            boxShadow: {
                'sm-300-inset': `0px 0px 1px 0px #${COLORS.neutral[200]}40 inset`,
                'sm-300': `0px 3px 5px 0px #${COLORS.neutral[200]}26`,
                'md-300-inset': `0px 0px 1px 0px #${COLORS.neutral[200]}40 inset`,
                'md-300': `0px 8px 12px 0px #${COLORS.neutral[200]}26`,
                'lg-300-inset': `0px 0px 1px 0px #${COLORS.neutral[200]}47 inset`,
                'lg-300': `0px 10px 18px 0px #${COLORS.neutral[200]}26`,
            },
        },
        screens: {
            xs: `${BREAKPOINTS.xs}px`,
            sm: `${BREAKPOINTS.sm}px`,
            md: `${BREAKPOINTS.md}px`,
            lg: `${BREAKPOINTS.lg}px`,
            xl: `${BREAKPOINTS.xl}px`,
        },
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};
