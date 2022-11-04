import {
    CREATE,
    AVAILABLE,
    ROOM_DET,
    BOOK_DET,
    DELETE,
    FETCH,
    FETCH_ALL,
} from '../constants/actionTypes';

export const bookingAPIReducer = (booking = [], action) => {
    switch (action.type) {
        case AVAILABLE:
            return action.payload;
        default:
            return booking;
    }
};

export const confirmationReducer = (confirmation = [], action) => {
    switch (action.type) {
        case CREATE:
            return action.payload;
        default:
            return confirmation;
    }
};

export const existingBookingReducer = (booking = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;
        case FETCH_ALL:
            return action.payload;
        case DELETE:
            return booking.filter(
                (book) => book.confirmation !== action.payload
            );
        default:
            return booking;
    }
};

export const bookingDetails = (
    state = {
        booking: [],
        room: [],
    },
    action
) => {
    switch (action.type) {
        case ROOM_DET:
            return { ...state, room: action.payload };
        case BOOK_DET:
            return { ...state, booking: action.payload };
        default:
            return state;
    }
};
