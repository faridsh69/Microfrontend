import { Suspense, lazy } from "react";

const LazyTimer = lazy(() => import(`./Timer`));

export const Suspender = () => {
  return (
    <div>
      {/* 3 Container Suspender */}
      <Suspense fallback={<div>LOADING</div>}>{<LazyTimer />}</Suspense>
    </div>
  );
};
