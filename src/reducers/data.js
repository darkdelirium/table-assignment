import firebase from '../firebase.js';

const initialState = {};

export default function userData(state = initialState, action) {
  if (action.type === "FETCH_DATA") {
    console.log("called FETCH_DATA", action.payload);
    return { ...state, ...action.payload };
  }
  return state;
}

export const onFetchData = (data) => (
  {
    type: "FETCH_DATA",
    payload: data
  }
);



export const fetchData = (table) => {

  return (dispatch) => dispatch(onFetchData({test: '123'}));
}


/*
export const fetchData = (table) => {
  console.log("fetchData called");
  return async (dispatch) => {
    try {
      let data = await fetch.getData('multiPost', page);
      dispatch(onPostsLoad(data));
    }
    catch (err) {
      console.log(`Initial data fetching error ${err.message}`)
      dispatch(onPostsLoad({}));
    }
  }
  
} */
