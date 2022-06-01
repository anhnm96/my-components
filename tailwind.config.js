const plugin = require('tailwindcss/plugin')

const gridAutoFit = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'grid-auto-fit': (value) => ({
          gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
        }),
      },
      { values: theme('gridAutoFit') }
    )
  },
  {
    theme: {
      gridAutoFit: {
        xs: '12rem',
        sm: '14rem',
        md: '16rem',
        lg: '18rem',
        xl: '20rem',
      },
    },
  }
)

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        info: 'var(--info)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
      },
    },
  },
  plugins: [gridAutoFit],
}
