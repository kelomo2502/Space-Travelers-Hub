const ROCKETS_FETCH_BEGIN = 'ROCKETS_FETCH_BEGIN';
const ROCKETS_FETCH_SUCCESS = 'ROCKETS_FETCH_SUCCESS';
const ROCKETS_FETCH_ERROR = 'ROCKETS_FETCH_ERROR';
const RESERVED_ROCKET = 'RESERVED_ROCKET';
const CANCELLED_RESERVE = 'CANCELLED_RESERVE';

// initial store
const store = {
  rockets: [],
  loading: false,
  error: null,
};

// rockets reducers
const rocketsReducer = (state = store, action) => {
  switch (action.type) {
    case ROCKETS_FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ROCKETS_FETCH_SUCCESS:
      return {
        ...state,
        rockets: action.payload.rocketArr,
        loading: false,
      };
    case ROCKETS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case RESERVED_ROCKET: {
      const id = parseInt(action.id, 10);
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return {
        ...state,
        rockets: newState,
      };
    }
    case CANCELLED_RESERVE: {
      const cancelid = parseInt(action.id, 10);
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== cancelid) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    }
    default:
      return state;
  }
};

// rockets action creators
export const rocketsFetchBegin = () => ({
  type: ROCKETS_FETCH_BEGIN,
});

export const rocketsFetchSuccess = (rocketArr) => ({
  type: ROCKETS_FETCH_SUCCESS,
  payload: { rocketArr },
});

export const rocketsFetchError = (error) => ({
  type: ROCKETS_FETCH_ERROR,
  payload: { error },
});

export const reservedRocket = (id) => ({
  type: RESERVED_ROCKET,
  id,
});

export const cancelledReserve = (id) => ({
  type: CANCELLED_RESERVE,
  id,
});

export default rocketsReducer;
