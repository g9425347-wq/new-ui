import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    libInjectCss(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      insertTypesEntry: true,
    })
  ],

  // Build the library mode
  build: {
    copyPublicDir:false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es']
    },

    // rollup configurations
    rollupOptions: {
      onwarn(warning, warn) {
        const warningSource = warning.id?.replace(/\\/g, '/');
        if (
          warning.code === 'EVAL' &&
          warningSource?.endsWith('/src/components/Widget/Dashboard.tsx')
        ) {
          return;
        }

        warn(warning);
      },
      output:{
        assetFileNames : '[name][extname]',
        entryFileNames: '[name].js',
      },
      external: (id) =>
        /^(?:react(?:-dom)?|@emotion\/[^/]+|@mui\/[^/]+|@fullcalendar\/[^/]+|@react-awesome-query-builder\/[^/]+|blob-util|cytoscape|cytoscape-fcose|react-cytoscapejs|echarts|echarts-for-react|highcharts|highcharts-react-official|lodash|moment|moment-timezone|react-draggable|react-dropzone|react-grid-layout|react-json-to-table|react-select|react-show-more-text|react-simple-wysiwyg|react-sortablejs)(?:\/.*)?$/.test(id),
    }
  },

  
})
