import react from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// interface ParentProps extends Object {}

function mountAppClosure() {
  let root;
  // let root: Root | null = null

  return (elem) => {
    // Here we can add logic on mounting this app, e.g. sync the history object
    root = root ? root : createRoot(elem);
    root.render(<App />);

    return () =>
      queueMicrotask(() => {
        root?.unmount();
        root = null;
      });
  };
}

export const mountApp = mountAppClosure();
