const background = {
  width: "1921px",
  height: "1080px",
  color: "#877e79",
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brown: {
        light: '#CFCBC9',
        DEFAULT: '#877E79',
        dark: '#6C6460',
      },
      blue: {
        light: '#587B97',
        DEFAULT: '#587B97',
        dark: '#587B97',
      },
      white: {
        light: '#FDFFFC',
        DEFAULT: '#FDFFFC',
        dark: '#FDFFFC',
      },
      black: {
        DEFAULT: '#191516',
      },
    },
    screens: {
      'sm': '450px',
      'md': '947px', // h1 line breaks at 946px
    },
    extend: {
      fontSize: {
        '7xl': '5rem',
        '4xl': '3rem',
        '2.5xl': '1.7rem',
      },
      fontFamily: {
        'header': ['Noto Sans'],
        'text': ['Open Sans'],
      },
      margin: {
        '40px': '40px',
        '80px': '80px',
        '460px': '460px',
        '560px': '560px',
      },
      maxWidth: {
        'img': background.width,
      },
      width: {
        '80': '20rem',
      },
      height: {
        '120': '30rem',
      },
      backgroundSize: {
        'imgheight': 'auto ' + background.height,
      },
      backgroundColor: {
        'imgcolor': background.color,
      },
    },
  },
  variants: {},
  plugins: [],
}
