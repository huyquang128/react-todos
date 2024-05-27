import { SET_JOB, ADD_JOB } from './constants';

export const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}
