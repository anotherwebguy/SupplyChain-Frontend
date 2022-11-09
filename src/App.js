import Recommendation from './components/Recommendation';
import Home from './components/Home';
import Commodity from './components/Commodity';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prediction from './components/Prediction';
import Result from './components/Result';

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
