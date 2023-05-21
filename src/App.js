import {Routes, Route} from 'react-router-dom';

import Products from './pages/products/products';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Product from './pages/product/product';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:product' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
