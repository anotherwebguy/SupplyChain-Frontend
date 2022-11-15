import Recommendation from './components/farmer/Recommendation';
import Dashboard from './components/farmer/Dashboard';
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
import TrackStatus from './utils/TrackStatus';
import Admin from './components/admin/Admin';
import Registration from './utils/Registration';
import Verification from './components/admin/Verification';
import Welcome from './components/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Welcome screen */}
        <Route path="/" element={<Welcome />} />

        {/* Registration screen */}
        <Route path="/register" element={<Registration />} />

        {/* Admin panel */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/verification" element={<Verification />} />

        {/* Farmer Routing */}

        <Route path='/farmer' element={<Dashboard />}></Route>
        <Route path='/farmer/predictions' element={<Prediction />}></Route>
        <Route path='/farmer/recommendations' element={<Recommendation />}></Route>
        <Route path='/farmer/recommendations/result' element={<Result />}></Route>
        <Route path='/farmer/broadcast' element={<Broadcast />}></Route>
        <Route path='/farmer/farmerbroadcast' element={<FarmerBroadcast />}></Route>
        <Route path='/farmer/microfinance' element={<MicroFinance />}></Route>
        <Route path='/farmer/processorRequests' element={<ProcessorRequest />}></Route>
        <Route path='/farmer/transactions' element={<Transactions />}></Route> 
        <Route path='/farmer/predictions/commodity' element={<Crop />}></Route> 
        <Route path='/farmer/status' element={<TrackStatus/>}></Route>

        {/* Processor Routing */}

        <Route path='/processor' element={<ProcessorDashboard/>}></Route>
        <Route path='/processor/broadcast' element={<ProcessorBroadcast/>}></Route>
        <Route path='/processor/ybroadcasts' element={<YourBroadcast/>}></Route>
        <Route path='/processor/orderDetails' element={<OrderDetails/>}></Route>
        <Route path='/processor/fbroadcasts' element={<FarmerProductBroadcast/>}></Route>
        <Route path='/processor/pInterest' element={<ProcessorInterest/>}></Route>
        <Route path='/processor/payments' element={<PendingPayments/>}></Route>
        <Route path='/processor/addreport' element={<AddReport/>}></Route>
        <Route path='/processor/reportswithpayment' element={<ReportsWithPayment/>}></Route>
        <Route path='/processor/rejected' element={<RejectedInterest/>}></Route>

        {/* Quality Checker Routing */}

        <Route path='/inspector' element={<QualityReports/>}></Route>

        {/* Retailer Routing */}

        <Route path='/retailer' element={<RetailerDashboard/>}></Route>
        <Route path='/retailer/processorbroadcast' element={<RProcessorBroadcast/>}></Route>
        <Route path='/retailer/previousorders' element={<PreviousOrder/>}></Route>
        <Route path='/retailer/retailer-report' element={<RetailerReport/>}></Route>
        <Route path='/retailer/broadcastToCustomer' element={<BroadcastToCustomer/>}></Route>

        {/* Customer Routing */}

        <Route path='/customer' element={<CustomerDashboard/>}></Route>
        <Route path='/customer/retailerbroadcast' element={<CustomerRetailerBroadcast/>}></Route>
        <Route path='/customer/history' element={<PreviousPurchases/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
