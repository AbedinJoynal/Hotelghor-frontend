import React, { useEffect } from 'react';
import '../../../styles/Rooms.scss';
import { getAllRooms } from '../../../actions/rooms';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BookWidget from '../../booking/BookWidget';

const Rooms = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(getAllRooms());
    }, [location]);
    const rooms = useSelector((state) => state.rooms.rooms);
    return (
        <div className="Rooms">
            <header
                className="header-main"
                style={{
                    background:
                        ' no-repeat center/cover url("/img/rooms/room_header.jpg")',
                }}
            >
                <div className="header-content">
                    <h2 className="alt-font">Rooms</h2>
                    <p>
                        Our generous guest rooms at Hotelghor boast breathtaking
                        views and exclusive amenities
                    </p>
                </div>

                <BookWidget />
            </header>

            <section className="desc">
                <h1 className="alt-font">Exclusive Features</h1>
                <p>
                    Choose between spectacular balcony views of hotel's private
                    Beach Resort and Oceanside View, from the largest hotel
                    rooms in Chittagong.
                </p>
            </section>

            <section className="flex-row-lg">
                {rooms.length < 1 ? (
                    <div className="loader">
                        <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h2>Loading...</h2>
                    </div>
                ) : (
                    rooms.map((room) => (
                        <article className="card" key={room.title}>
                            <Link to={`rooms/${room.url}`}>
                                <button className="btn-alt ">EXPLORE</button>
                            </Link>
                            <div>
                                <h1 className="alt-font">{room.title}</h1>
                                <p>{room.description}</p>
                            </div>
                            <div className="img-container">
                                <img
                                    src={`img/rooms/${room.mainImage}`}
                                    alt={room.mainImage}
                                />
                            </div>
                        </article>
                    ))
                )}
            </section>
        </div>
    );
};

export default Rooms;
