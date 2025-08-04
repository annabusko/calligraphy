import { BrowserRouter } from 'react-router-dom';
import { RootLayout } from './layout/RootLayout';
import { AppRouter } from './router';
import '../styles/index.css'; // Import global styles

export const App = () => (
  <BrowserRouter>
    <RootLayout>
      <AppRouter />
    </RootLayout>
  </BrowserRouter>
);
