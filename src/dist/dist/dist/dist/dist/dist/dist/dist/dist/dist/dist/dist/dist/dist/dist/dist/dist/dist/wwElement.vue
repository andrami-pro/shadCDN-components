<template>
  <div class="shadcn-wrapper" ref="reactRoot"></div>
</template>

<script>
// We need to import the createRoot function from React DOM
import { createRoot } from 'react-dom/client';
import ReactEntry from './dist/ReactEntry';
import React from 'react';

export default {
  props: {
    // WeWeb injects 'content' prop with all the bound variables defined in ww-config.js
    content: { type: Object, default: () => ({}) },
    /* wwEditor:start */
    // WeWeb injects specific editor props
    wwEditorState: { type: Object, default: () => ({}) },
    /* wwEditor:end */
  },
  data() {
    return {
      root: null,
    };
  },
  mounted() {
    this.mountReact();
  },
  watch: {
    // Watch for content changes (WeWeb variable updates) to re-render React
    content: {
      deep: true,
      handler() {
        this.renderReact();
      },
    },
  },
  methods: {
    mountReact() {
      if (this.$refs.reactRoot) {
        this.root = createRoot(this.$refs.reactRoot);
        this.renderReact();
      }
    },
    renderReact() {
      if (this.root) {
        // We render the ReactEntry component, passing the content prop
        this.root.render(
            React.createElement(ReactEntry, { content: this.content })
        );
      }
    },
  },
  beforeUnmount() {
    if (this.root) {
      this.root.unmount();
    }
  },
};
</script>

<style>
/* Ensure Tailwind styles are available */
@import "./styles/globals.css";
</style>
