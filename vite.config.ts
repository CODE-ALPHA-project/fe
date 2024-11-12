import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  /**proxy configuration for communicating with spring */
  server: {
    host: true,
    open: "/",
    proxy: {
      "/api/v1": {
        target: "https://13.209.21.155.nip.io", // spring be url
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // define:{
  //   global:{}
  // }
});
