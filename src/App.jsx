import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Itineraries from "./pages/Itineraries";
import Bookings from "./pages/Bookings";
import AddBooking from "./pages/AddBooking";
import AddDestination from "./pages/AddDestination";
import AddPackage from "./pages/AddPackage";
import AddItinerary from "./pages/AddItinerary";
import EditDestination from "./pages/EditDestination";
import EditPackage from "./pages/EditPackage";
import EditItinerary from "./pages/EditItinerary";

import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/destinations" element={<ProtectedRoute><Destinations /></ProtectedRoute>} />
            <Route path="/destinations/add" element={<ProtectedRoute><AddDestination /></ProtectedRoute>} />
            <Route path="/destinations/edit/:id" element={<ProtectedRoute><EditDestination /></ProtectedRoute>} />

            <Route path="/packages" element={<ProtectedRoute><Packages /></ProtectedRoute>} />
            <Route path="/packages/add" element={<ProtectedRoute><AddPackage /></ProtectedRoute>} />
            <Route path="/packages/edit/:id" element={<ProtectedRoute><EditPackage /></ProtectedRoute>} />

            <Route path="/itineraries" element={<ProtectedRoute><Itineraries /></ProtectedRoute>} />
            <Route path="/itineraries/add" element={<ProtectedRoute><AddItinerary /></ProtectedRoute>} />
            <Route path="/itineraries/edit/:id" element={<ProtectedRoute><EditItinerary /></ProtectedRoute>} />

            <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
            <Route path="/bookings/add" element={<ProtectedRoute><AddBooking /></ProtectedRoute>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}