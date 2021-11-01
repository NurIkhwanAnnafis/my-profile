import httpService from "../../app/http.service";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const CREATE_DATA = 'CREATE_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export function fetchData(params){
    return dispatch => {
        dispatch({ type: FETCH_DATA_REQUEST });
        return httpService.get('/to-do-list', { params }).then(response => {
            if(response){
                dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
                return response
            }
            dispatch({ type: FETCH_DATA_ERROR });
            if(response === false) { //handle 401 from interceptor
                // do logout
            } 
        })
    }
}

export function createData(data){
    return dispatch => {
        dispatch({ type: CREATE_DATA, payload: data });
    }
}

export function updateData(data){
    return dispatch => {
        dispatch({ type: UPDATE_DATA, payload: data });
    }
}

export function deleteData(data){
    return dispatch => {
        dispatch({ type: DELETE_DATA, payload: data });
    }
}