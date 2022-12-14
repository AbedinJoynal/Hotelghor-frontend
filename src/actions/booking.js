import {
  CREATE,
  FETCH,
  FETCH_ALL,
  AVAILABLE,
  ROOM_DET,
  BOOK_DET,
  DELETE,
} from "../constants/actionTypes";
import * as api from "../api";

export const getAllAvailable = (params) => async (dispatch) => {
  try {
    const { data } = await api.fetchAvailableRooms(params);

    dispatch({ type: AVAILABLE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllBookings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllBookings();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postRoomDetails = (data) => {
  return {
    type: ROOM_DET,
    payload: data,
  };
};

export const postBookingDetails = (data) => {
  return {
    type: BOOK_DET,
    payload: data,
  };
};

export const postBooking = (details) => async (dispatch) => {
  try {
    const newBooking = {
      ...details.formData,
      ...details.guestDetails.booking,
      ...details.guestDetails.room,
    };

    const { data } = await api.createBooking(newBooking);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleBooking = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchExistingBooking(id);
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooking = (id) => async (dispatch) => {
  try {
    await api.deleteBooking(id);

    dispatch({ type: DELETE, payload: id.id });
  } catch (error) {
    console.log(error);
  }
};
