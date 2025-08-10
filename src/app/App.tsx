import { BrowserRouter } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { AppRouter } from './router';
import '../styles/global.css';
import '../i18n/config/i18n';

export const App = () => (
  <BrowserRouter>
    <RootLayout>
      <AppRouter />
    </RootLayout>
  </BrowserRouter>
);
