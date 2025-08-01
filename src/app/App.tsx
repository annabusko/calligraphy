import { BrowserRouter } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { AppRouter } from './router';

export const App = () => (
  <BrowserRouter>
    <RootLayout>
      <AppRouter />
    </RootLayout>
  </BrowserRouter>
);