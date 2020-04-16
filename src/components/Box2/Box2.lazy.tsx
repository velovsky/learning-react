import React, { lazy, Suspense } from 'react';

const LazyBox2 = lazy(() => import('./Box2'));

const Box2 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBox2 {...props} />
  </Suspense>
);

export default Box2;
