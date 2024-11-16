import { Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage/HomePage';
import LoginPage from '@pages/AuthPage/LoginPage';
import SignUpPage from '@pages/AuthPage/SignUpPage';
import ItemsPage from '@pages/ItemsPage/ItemsPage';
import AddItemPage from '@pages/AddItemPage/AddItemPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/items" element={<ItemsPage />} />
      <Route path="/additem" element={<AddItemPage />} />
    </Routes>
  );
}

export default App;
