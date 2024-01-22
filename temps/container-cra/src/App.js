import React, { Suspense, lazy, useState } from "react";

const TimeApp = lazy(() => import("TIME_APP/microApp"));

function App() {
  const [name, setName] = useState(null);
  return (
    <div className="App">
      <div className="Microfrontend-Apps">
        {name ? <p>Your name is: {name}</p> : null}
        <Suspense fallback={<span>Loading...</span>}>
          <TimeApp onChange={(e) => setName(e.target.value)} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
