// rollup.config.js
import federation from "@originjs/vite-plugin-federation";
export default {
  input: "src/index.js",
  plugins: [
    federation({
      name: "host-app",
      remotes: {
        remote_app: "http://localhost:5174/remoteEntry.js",
      },
      shared: ["react"],
    }),
  ],
};
