import { Suspense, lazy } from "react";

const LazyTimer = lazy(() => import(`./Timer.jsx`));

export const Suspender = () => {
  return (
    <div>
      container Suspender
      <Suspense fallback={<div>LOADING</div>}>{<LazyTimer />}</Suspense>
    </div>
  );
};