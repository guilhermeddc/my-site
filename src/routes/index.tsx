import React, {lazy, Suspense} from 'react';
import {
  Routes as Router,
  Route,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

import {BaseLayout} from 'shared/layout';

const Home = lazy(() => import('pages/Home'));

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Suspense fallback={<></>}>
          <Router>
            <Route path="/" element={<Home />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Router>
        </Suspense>
      </BaseLayout>
    </BrowserRouter>
  );
};
