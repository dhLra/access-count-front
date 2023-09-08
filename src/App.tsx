import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './pages/404Page';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { AuthProvider } from './contexts/AuthContext';
import LayoutProtected from './components/layouts/LayoutProtected';

function App() {

  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404 />}></Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/home" element={
            <LayoutProtected>
              <HomePage />
            </LayoutProtected>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
