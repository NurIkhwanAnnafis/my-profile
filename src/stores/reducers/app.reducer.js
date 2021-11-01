import { compareAsc, compareDesc } from '../../helpers/sortData';
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
    CREATE_DATA,
    UPDATE_DATA,
    DELETE_DATA
} from '../actions/app.action';

const initState = {
    isLoading: false,
    listDataDone: [],
    listDataUnFinished: [],
};

function createData(Data, reqData, identifier) {
    const currData = Data;
    
    if(identifier === reqData.status){
        currData.push(reqData);
    }

    return currData;
}

function updateData(Data, reqData, identifier) {
    const currData = Data;
    const index = currData.findIndex(val => val.id === reqData.id);
    if(index !== -1){
        currData.splice(index, 1);    
    }
    if(identifier === reqData.status){
        currData.push(reqData);
    }

    return currData;
}

function deleteData(Data, reqData) {
    const currData = Data;
    const index = currData.findIndex(val => val.id === reqData.id);

    currData.splice(index, 1);

    return currData;
}

export default function appReduce(state = initState, action) {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }

    case FETCH_DATA_SUCCESS:
        return {
            ...state,
            isLoading: false,
            listDataDone: action.payload.filter(item => item.status === 1).sort(compareAsc),
            listDataUnFinished: action.payload.filter(item => item.status === 0).sort(compareDesc)
        }

    case FETCH_DATA_ERROR:
        return {
            ...state,
            isLoading: false
        }

    case CREATE_DATA:
        return {
            ...state,
            listDataDone: createData(state.listDataDone, action.payload, 1),
            listDataUnFinished: createData(state.listDataUnFinished, action.payload, 0)
        }

    case UPDATE_DATA:
        return {
            ...state,
            listDataDone: updateData(state.listDataDone, action.payload, 1),
            listDataUnFinished: updateData(state.listDataUnFinished, action.payload, 0)
        }

    case DELETE_DATA:
        return {
            ...state,
            listDataUnFinished: deleteData(state.listDataUnFinished, action.payload)
        }

    default:
        return state;
    }
}
