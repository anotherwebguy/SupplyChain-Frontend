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
import ProcessorInterest from './components/processor/ProcessorInterest';
import PendingPayments from './components/processor/PendingPayments';
import AddReport from './components/processor/AddReport';
import ReportsWithPayment from './components/processor/ReportsWithPayment';
import QualityReports from './components/quality checker/QualityReports';
import RejectedInterest from './components/processor/RejectedInterest';
import RetailerDashboard from './components/retailer/RetailerDashboard';
import RProcessorBroadcast from './components/retailer/RProcessorBroadcast';
import PreviousOrder from './components/retailer/PreviousOrder';
import RetailerReport from './components/retailer/RetailerReport';
import BroadcastToCustomer from './components/retailer/BroadcastToCustomer';
import CustomerDashboard from './components/customer/CustomerDashboard';
import CustomerRetailerBroadcast from './components/customer/CustomerRetailerBroadcast';
import PreviousPurchases from './components/customer/PreviousPurchases';
import Crop from './components/farmer/Crop';
import TrackStatus from './components/farmer/TrackStatus';
import Timeline from './components/farmer/Timeline';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Farmer Routing */}

        {/* <Route path='/' element={<Dashboard />}></Route>
        <Route path='/predictions' element={<Prediction />}></Route>
        <Route path='/recommendations' element={<Recommendation />}></Route>
        <Route path='/recommendations/result' element={<Result />}></Route>
        <Route path='/broadcast' element={<Broadcast />}></Route>
        <Route path='/farmerbroadcast' element={<FarmerBroadcast />}></Route>
        <Route path='/microfinance' element={<MicroFinance />}></Route>
        <Route path='/processorRequests' element={<ProcessorRequest />}></Route>
        <Route path='/transactions' element={<Transactions />}></Route> 
        <Route path='/predictions/commodity' element={<Crop />}></Route> 
        <Route path='/status' element={<TrackStatus/>}></Route> */}
       
        <Route path='/' element={<Timeline/>}></Route>

        {/* Processor Routing */}

        {/* <Route path='/' element={<ProcessorDashboard/>}></Route>
      <Route path='/broadcast' element={<ProcessorBroadcast/>}></Route>
      <Route path='/ybroadcasts' element={<YourBroadcast/>}></Route>
      <Route path='/orderDetails' element={<OrderDetails/>}></Route>
      <Route path='/fbroadcasts' element={<FarmerProductBroadcast/>}></Route>
      <Route path='/pInterest' element={<ProcessorInterest/>}></Route>
      <Route path='/payments' element={<PendingPayments/>}></Route>
      <Route path='/addreport' element={<AddReport/>}></Route>
      <Route path='/reportswithpayment' element={<ReportsWithPayment/>}></Route>
      <Route path='/rejected' element={<RejectedInterest/>}></Route> */}

        {/* Quality Checker Routing */}

        {/* <Route path='/' element={<QualityReports/>}></Route> */}

        {/* Retailer Routing */}
        {/* <Route path='/' element={<RetailerDashboard/>}></Route>
        <Route path='/processorbroadcast' element={<RProcessorBroadcast/>}></Route>
        <Route path='/previousorders' element={<PreviousOrder/>}></Route>
        <Route path='/retailer-report' element={<RetailerReport/>}></Route>
        <Route path='/broadcastToCustomer' element={<BroadcastToCustomer/>}></Route> */}

        {/* Customer Routing */}
        {/* <Route path='/' element={<CustomerDashboard/>}></Route>
        <Route path='/retailerbroadcast' element={<CustomerRetailerBroadcast/>}></Route>
        <Route path='/history' element={<PreviousPurchases/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
