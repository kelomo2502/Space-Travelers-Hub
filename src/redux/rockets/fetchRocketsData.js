import {
  rocketsFetchBegin,
  rocketsFetchSuccess,
  rocketsFetchError,
} from './rockets';

const fetchRocketsData = () => {
  const url = 'https://api.spacexdata.com/v3/rockets';

  return (dispatch) => {
    dispatch(rocketsFetchBegin());
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(rocketsFetchSuccess(data));
        return data;
      })
      .catch((error) => dispatch(rocketsFetchError(error)));
  };
};

export default fetchRocketsData;
