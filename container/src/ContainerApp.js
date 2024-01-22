import React, { lazy, Suspense } from "react";

const TimeApp = lazy(() => import("TIME_APP/microApp"));
const BestApp = lazy(() => import("BEST_APP/BestApp"));

export const ContainerApp = () => {
  const [name, setName] = React.useState(null);

  return (
    <div className="ContainerApp">
      <h1>Container app</h1>
      {name ? <p>Your name is: {name}</p> : null}
      <div className="Microfrontend-Apps">
        <Suspense fallback={<span>Loading...</span>}>
          <TimeApp onChange={(e) => setName(e.target.value)} />
        </Suspense>
        <Suspense fallback={<span>Loading...</span>}>
          <BestApp />
        </Suspense>
      </div>
    </div>
  );
};
