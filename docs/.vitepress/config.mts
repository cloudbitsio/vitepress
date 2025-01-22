import { loadEnv, defineConfig } from 'vitepress'

export default async ({ mode }) => {
  const env = loadEnv(mode || '', process.cwd())
  console.log("env loaded in config.mts", env);

  const url =
  env.VITE_ENVIRONMENT === 'production'
    ? 'https://www.thunder.so'
    : env.VITE_ENVIRONMENT === 'development'
    ? 'https://www.stackoverflow.com'
    : 'http://localhost:5173'


  return defineConfig({ 
    title: env.VITE_COLOR,
    description: "A VitePress Site",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: 'Home', link: '/' },
        { text: "Thunder", link: url },
        { text: 'Examples', link: '/markdown-examples' }
      ],
  
      sidebar: [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    }
  })
}

// https://vitepress.dev/reference/site-config
// export default defineConfig({
//   title: "Vitepress on Thunder",
//   description: "A VitePress Site",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: 'Home', link: '/' },
//       { text: 'Examples', link: '/markdown-examples' }
//     ],

//     sidebar: [
//       {
//         text: 'Examples',
//         items: [
//           { text: 'Markdown Examples', link: '/markdown-examples' },
//           { text: 'Runtime API Examples', link: '/api-examples' }
//         ]
//       }
//     ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ]
//   }
// })
