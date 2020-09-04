import Loading from 'components/Loading';
import RenderRoute from 'configs/RenderRoute';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="container-app">
        <Suspense fallback={<Loading />}>
          <RenderRoute />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
