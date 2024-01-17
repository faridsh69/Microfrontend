import React, { lazy, Suspense } from "react";

const TimeApp = lazy(() => import("TIME_APP/microApp"));

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
      </div>
    </div>
  );
};
