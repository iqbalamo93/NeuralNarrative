import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	  },

  integrations: [starlight({
    title: 'Home',
    social: {
      github: 'https://github.com/iqbalamo93/NeuralNarrative'
    },
    sidebar: [{
      label: 'Blogs',
      autogenerate: {
        directory: 'blogs'
      }
    }, {
      label: 'Books Review',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'What is this!',
        link: '/books-review/intro-reviews/' //will change this in future
      }
	]
    }, {
      label: 'Element of Neural Networks',
      autogenerate: {
        directory: 'elements-of-nn'
      }
    }, {
      label: 'Frameworks FastTrack',
      autogenerate: {
        directory: 'framework-fastrack'
      }
    }]
  }), react()]
});