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
        primary: 'var(--primary)',
      },
    },
  },
  plugins: [
    gridAutoFit,
    /**
     * The `initial` variant modifies the selector to `html :where(.initial\:rounded)`,
     * reducing the specificity from `010` to `001`,
     * so that a regular class will "win".
     * https://twitter.com/adamwathan/status/1496663833980686338
     * Or we can use tailwind-merge instead
     */
    function ({ addVariant }) {
      addVariant('initial', 'html :where(&)')
    },
  ],
}
