import React from 'react';
import AppDashboard from './components/AppDashboard';
import {Route, Routes} from 'react-router-dom';
import CartPage from './components/CartPage';
import AddMenuItem from './components/AddMenuItem';

function App() {
  const adminKey:string = "/secret";

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<AppDashboard/>}></Route>  {/* PUBLIC ROUTE */}
        <Route path="/cart" element={<CartPage/>}></Route> {/* PRIVATE ROUTE */}
        <Route path={adminKey} element={<AddMenuItem/>}></Route> {/* ADMIN ROUTE */}
      </Routes>
    </div>
  );
}

export default App;
