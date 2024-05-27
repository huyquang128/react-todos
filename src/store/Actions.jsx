import { SET_JOB, ADD_JOB, DELETE_JOB, START_EDIT_JOB, EDITING_JOB, END_EDIT_JOB } from './constants';

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

export const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}

export const startEditJob = (payload) => {
    return {
        type: START_EDIT_JOB,
        payload
    }
}

export const editingJob = (payload) => {
    return {
        type: EDITING_JOB,
        payload
    }
}

export const endEditJob = (payload) => {
    return {
        type: END_EDIT_JOB,
        payload
    }
}
