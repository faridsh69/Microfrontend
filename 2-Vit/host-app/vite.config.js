import federation from "@originjs/vite-plugin-federation";

export default {
  input: "src/index.js",
  plugins: [
    federation({
      name: "vitHostApp",
      remotes: {
        vitRemoteApp: "http://localhost:3002/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
  ],
  server: {
    port: 3020,
  },
};
