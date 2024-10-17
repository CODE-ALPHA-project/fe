import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  /**proxy configuration for communicating with spring */
  server: {
    host:true,
    open: "/",
    proxy: {
        "/api/v1": {
            target: "http://13.209.21.155", // spring be url
            changeOrigin: true,
        },
    },
  },
  // define:{
  //   global:{}
  // }
});
