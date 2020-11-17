import api from "@/api";

const AIRBNBLIST = "airbnbList";
const LISTFETCH = `${AIRBNBLIST}/LISTFETCH`;

export const listFetch = (data) => {
  return {
    type: AIRBNBLIST,
    data,
  };
};

const defaultJSON = {
  area: "서울",
  checkin: "2020-11-16",
  checkout: "2020-11-20",
  adults: 1,
  children: 0,
  infants: 0,
};

export const listFetching = () => {
  return (dispatch) => {
    return api
      .get("/api", { ...defaultJSON })
      .then((res) => {
        dispatch(listFetch(res.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

const initialState = {
  airbnbList: null,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case LISTFETCH:
      return {
        ...state,
        airbnbList: action.airbnbList,
      };
    default:
      return state;
  }
}

export default counter;
