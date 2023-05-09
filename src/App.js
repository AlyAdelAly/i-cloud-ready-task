import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import ContextProvider from './context/CartContext';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import CustomerEngagement from './pages/CustomerEngagement';
import ActionableInsights from './pages/ActionableInsights';
import EmployeesProductivity from './pages/EmployeesProductivity';
import OperationsExcellence from './pages/OperationsExcellence';

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customerEngagement' element={<CustomerEngagement />} />
          <Route path='/employeesProductivity' element={<EmployeesProductivity />} />
          <Route path='/operationsExcellence' element={<OperationsExcellence />} />
          <Route path='/actionableInsights' element={<ActionableInsights />} />
        </Routes>
        <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
      </ContextProvider>
    </>
  );
}

export default App;