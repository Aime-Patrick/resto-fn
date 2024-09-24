import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
const router:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default router
