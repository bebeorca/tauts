// routers/router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login.jsx';
import Register from '../pages/register.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import NotFound from '../components/NotFound.jsx';
import LandingPage from '../pages/landing.jsx';
import Links from '../pages/links.jsx';




function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path='/:name' element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
