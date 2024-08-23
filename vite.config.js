import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import {paths} from './src/constants/path'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         public: "/public",

         ...paths.reduce((acc, cur) => ({
            ...acc,
            [cur]: `/${cur === "src" ? cur : "src/" + cur}`
         }), "")
      }
   }
})
