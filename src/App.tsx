import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;