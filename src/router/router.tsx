import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card';

const router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/card' element={<Card />}>

        </Route>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </div>
  )
}

export default router
