import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import RecipeDetails from './components/RecipeDetails';
import FavoritesPage from './pages/FavoritesPage';

function App() {

  return (
    <div className='w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path="/meal/:id" element={<RecipeDetails />} />
        </Routes>    
    </div>
  );
}

export default App;
