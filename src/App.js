import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStylex from 'styles/GlobalStyles';
import HomePage from '@pages/HomePage/HomePage';
import LoginPage from '@pages/AuthPage/LoginPage';
import SignUpPage from '@pages/AuthPage/SignUpPage';
import ItemsPage from '@pages/ItemsPage/ItemsPage';
import AddItemPage from '@pages/AddItemPage/AddItemPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStylex />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
