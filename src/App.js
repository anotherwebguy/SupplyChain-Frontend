import Recommendation from './components/farmer/Recommendation';
import Dashboard from './components/farmer/Dashboard';
import Commodity from './components/farmer/Commodity';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prediction from './components/farmer/Prediction';
import Result from './components/farmer/Result';
import Broadcast from './components/farmer/Broadcast';
import FarmerBroadcast from './components/farmer/FarmerBroadcast';
import MicroFinance from './components/farmer/MicroFinance';
import ProcessorRequest from './components/farmer/ProcessorRequest';
import Transactions from './components/farmer/Transactions';
import ProcessorDashboard from './components/processor/ProcessorDashboard';
import ProcessorBroadcast from './components/processor/ProcessorBroadcast';
import YourBroadcast from './components/processor/YourBroadcast';
import OrderDetails from './components/processor/OrderDetails';
import FarmerProductBroadcast from './components/processor/FarmerProductBroadcast';

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/predictions' element={<Prediction/>}></Route>
        <Route path='/recommendations' element={<Recommendation/>}></Route>
        <Route path='/recommendations/result' element={<Result/>}></Route>
        <Route path='/broadcast' element={<Broadcast/>}></Route>
        <Route path='/farmerbroadcast' element={<FarmerBroadcast/>}></Route>
        <Route path='/microfinance' element={<MicroFinance/>}></Route>
        <Route path='/processorRequests' element={<ProcessorRequest/>}></Route>
        <Route path='/transactions' element={<Transactions/>}></Route>
      </Routes>
      </BrowserRouter>
      // <BrowserRouter>
      // <Routes>
      //   <Route path='/' element={<ProcessorDashboard/>}></Route>
      //   <Route path='/broadcast' element={<ProcessorBroadcast/>}></Route>
      //   <Route path='/ybroadcasts' element={<YourBroadcast/>}></Route>
      //   <Route path='/orderDetails' element={<OrderDetails/>}></Route>
      //   <Route path='/fbroadcasts' element={<FarmerProductBroadcast/>}></Route>
      // </Routes>
      // </BrowserRouter>
  );
}

export default App;
