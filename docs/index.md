---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Vitepress on Thunder"
  text: "A VitePress Site"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
const env = import.meta.env.VITE_ENVIRONMENT;
const color = import.meta.env.VITE_COLOR;

console.log("env from index.md", env)
</script>

env: {{ env }} 

mode: %MODE%

base url: %BASE_URL%

color: {{ color }}

color2: %VITE_COLOR%