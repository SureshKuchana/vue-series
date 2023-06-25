import { defineConfig } from 'vite'
import { DefineComponent } from 'vue';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

declare module '*.vue' {    
    const component: DefineComponent<{}, {}, any>;
    export default component;
}