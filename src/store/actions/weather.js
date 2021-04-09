import {
    START_CTIIES_INFO,
    FETCH_CITIES_INFO,
    FAILED_CITIES_INFO,
} from '../ActionTypes';
import API from '../../common/API';

export const fetchCities = (latitude, longitude, dispatch, navigation) => {
    dispatch({
        type: START_CTIIES_INFO
    });
    API.fetchCitiesAPI(latitude, longitude)
        .then((res) => res.json())
        .then(jsonRes => {
            if (jsonRes.message) {
                dispatch({
                    type: FETCH_CITIES_INFO,
                    payload: jsonRes.list
                })
            } else {
                dispatch({
                    type: FAILED_CITIES_INFO,
                    payload: jsonRes.error
                })
            }
        })
}