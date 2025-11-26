import { Routes, Route, Navigate } from 'react-router-dom';

// Auth pages
import Login from '../pages/auth/Login.jsx';
import Signup from '../pages/auth/Signup.jsx';

// Future pages
import CustomerDashboard from '../pages/customer/CustomerDashboard.jsx';
import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
import Services from '../pages/customer/Services'; // Just to check
import PlaceOrder from '../pages/customer/PlaceOrder'; // Just to check
import TrackOrder from '../pages/customer/TrackOrder'; // Just to check
import History from '../pages/customer/History'; // Just to check

export default function AppRouter() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Customer */}
      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/history" element={<History />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
