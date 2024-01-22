// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default {
  plugins: [
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
      },
      shared: ["react"],
    }),
  ],
};
