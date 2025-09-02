const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Aditya Sharma',
    description:
      'Aditya Sharma is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    siteUrl: 'https://AdityaSharma.com',
    image: '/og.png',
    twitterUsername: '@asharmaa011',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Aditya Sharma',
        short_name: 'Aditya Sharma',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    // Enable PWA support
    `gatsby-plugin-offline`,

    // File sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },

    // Markdown transformer
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // 👇 this plugin makes relative paths in frontmatter (like cover: './Font4i.png') work
          {
            resolve: `gatsby-remark-relative-images-v2`,
            options: {
              staticFolderName: 'static', // optional
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
              tracedSVG: { color: config.colors.green },
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },

    // Analytics
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: 'UA-45666519-2',
        head: true,
        anonymize: true,
      },
    },
  ],

  flags: {
    DEV_SSR: true,
  },
};
