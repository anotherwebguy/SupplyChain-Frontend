import Recommendation from './components/farmer/Recommendation';
import Home from './components/farmer/Home';
import Commodity from './components/farmer/Commodity';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prediction from './components/farmer/Prediction';
import Result from './components/farmer/Result';

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/predictions' element={<Prediction/>}></Route>
        <Route path='/recommendations' element={<Recommendation/>}></Route>
        <Route path='/recommendations/result' element={<Result/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
