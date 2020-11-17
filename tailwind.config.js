module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        cultured: '#eff1f2',
        jet: '#292929',
        'indigo-dye': '#013f71',
        'tart-orange': '#e84a47',
        'oxford-blue': '#002645',
      },
      screens: {
        '2xl': '1440px',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
