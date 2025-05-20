import federation from "@originjs/vite-plugin-federation";

export default {
  plugins: [
    federation({
      name: "vitRemoteApp",
      filename: "remoteEntry.js", // 99% of the time it is named remoteEntry.js
      exposes: {
        "./VitRemoteComponent": "./src/VitRemoteComponent.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    target: "esnext", // ← important: enables top-level await
    minify: false,
    cssCodeSplit: false,
  },
};
