import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

const RspackRemoteComponent = React.lazy(() =>
  import("rspackRemoteApp/RspackRemoteComponent")
);

const App = () => (
  <div>
    <h1>1 Rspack - Host App</h1>
    <Suspense fallback={<div>Loading Remote...</div>}>
      <RspackRemoteComponent />
    </Suspense>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
