import '@app/app.css';
import '@patternfly/react-core/dist/styles/base.css';
import * as React from 'react';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import { BrowserRouter as Router } from 'react-router-dom';

const AppName: string = "Hello World";

const App: React.FunctionComponent = () => (
  <Router>
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  </Router>
);

export {AppName, App};
export default App;
