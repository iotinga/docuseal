module.exports = {
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
	  'color-scheme': 'light',
          primary: '#e4e4e4',
          secondary: '#9fc1ef',
          accent: '#216bff',
          neutral: '#131934',
          'base-100': '#fafafa',
          'base-200': '#efefef',
          'base-300': '#e7e7e7',
          'base-content': '#292929',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
	/*
	  'color-scheme': 'light',
          primary: '#e4e0e1',
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          neutral: '#291334',
          'base-100': '#faf7f5',
          'base-200': '#efeae6',
          'base-300': '#e7e2df',
          'base-content': '#291334',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem' 
         */
        }
      }
    ]
  }
}
