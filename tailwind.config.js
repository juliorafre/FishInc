module.exports = {
  purge: {
    enabled: true,
    content: ['./index.html'],
  },
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      boxShadow: {
        fishHeader: '0px 6px 4px rgba(0, 0, 0, 0.02);',
      },
      colors: {
        'fish-background': '#F6F7FB',
        'fish-lightgray': '#DEDEDE',
        'fish-text-primary': '#001567',
        'fish-text-small': '#828282',
        'fish-button-default': '#EFEFEF',
        'fish-button-selected': '#22F2FF',
        'fish-accent-cian': '#77FBDE',
        'fish-accent-blue': '#5850EC',
        'fish-accent-red': '#FF0080',
        'fish-accent-green': '#3DF165',
      },
      spacing: {
        imageFixed: '0.01rem',
        '14': '3.5rem',
        '28': '7rem',
        '52': '15rem',
        '72': '18rem',
        fisTileWMAx: '18.4375rem',
        fishHTileDefault: '6.6875rem',
        fishTileWMin: '14.75rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
