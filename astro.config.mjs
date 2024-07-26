import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import rehypeMathJax from 'rehype-mathjax';
// import  { Props } from '@astrojs/starlight/props';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax]
  },
  site: 'https://neuralnarrative.io',
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: 'Home',
      customCss: ['./src/styles/custom.css'],
      social: {
        github: 'https://github.com/iqbalamo93/NeuralNarrative'
      },
      components: {
        Header: './src/components/Header.astro',
        Hero: './src/components/Hero.astro',
        ThemeProvider:'./src/components/ThemeProvider.astro',
      },
      customCss: ['./src/styles/theme.css']
      ,
      sidebar: [
        {
          label: 'Blogs',
          items: [
            'blogs/intro-blog',
            // Nested stuff
            {
              label: 'Transformers',
              items: ['blogs/transformers/00_intro', 'blogs/transformers/05_transformer',],
            },
            {
              label: 'Attention',
              items: ['blogs/attention/self_attention',],
            },
          ],
        },
        {
          label: 'Books Review',
          items: [
            {
              label: 'What is this!',
              link: '/books-review/intro-reviews/' // will change this in future
            }
          ]
        },
        {
          label: 'Element of Neural Networks',
          autogenerate: {
            directory: 'elements-of-nn'
          }
        },
        {
          label: 'Frameworks FastTrack',
          autogenerate: {
            directory: 'framework-fastrack'
          }
        }
      ]
    }),
    tailwind({
      applyBaseStyles: false
    }),
    react(),
    tailwind(),
    markdoc(),
    mdx(),
    sitemap(),
  ]
});