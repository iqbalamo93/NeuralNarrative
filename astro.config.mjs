import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
// import  { Props } from '@astrojs/starlight/props';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathJax]
  },
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: 'Home',
      social: {
        github: 'https://github.com/iqbalamo93/NeuralNarrative'
      },
      components: {
        Header: './src/components/Header.astro',
      },
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
    markdoc()
  ]
});