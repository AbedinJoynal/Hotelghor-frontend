import React, { useEffect } from 'react';
import './styles/App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import NavMobile from './components/navbar/NavMoblile';
import Home from './components/pages/Home';
import Rooms from './components/pages/rooms/Rooms';
import Room from './components/pages/rooms/Room';
import Dining from './components/pages/Dining';
import Footer from './components/pages/Footer';
import About from './components/pages/About';
import Tour from './components/pages/Tour';
import Booking from './components/booking/Booking';
import Available from './components/booking/Available';
import Checkout from './components/booking/Checkout';
import Confirm from './components/booking/Confirm';
import Auth from './components/auth/Auth';
import Existing from './components/booking/Existing';
import NoPage from './components/pages/NoPage';
const App = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <>
            <Navbar />
            <NavMobile />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route
                    path="/rooms/:id"
                    element={(props) => <Room {...props} />}
                />
                <Route path="/dining" element={<Dining />} />
                <Route path="/about" element={<About />} />
                <Route path="/tours" element={<Tour />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/booking/availability" element={<Available />} />
                <Route path="/booking/checkout" element={<Checkout />} />
                <Route path="/booking/confirm" element={<Confirm />} />
                <Route path="/booking/existing" element={<Existing />} />
                <Route path="/admin" element={<Auth />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
