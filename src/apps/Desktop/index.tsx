import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/components/Loading'

const App = React.lazy(() => import('./App'));


const AsyncApp = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <App />
    </Suspense>
      
  );
};

export default AsyncApp;
