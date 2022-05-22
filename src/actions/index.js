export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = "CLEAR";
export const MEMORY_ADD = "MEMORY_ADD"
export const MEMORY_COMBINE = "MEMORY_COMBINE"
export const MEMORY_CLEAR = "MEMORY_CLEAR"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload: operator})
}

export const clearCalc = () => {
    return({type:CLEAR})
}

export const addToMem = () => {
    return({type:MEMORY_ADD})
}

export const combineMem = () => {
    return({type:MEMORY_COMBINE})
}

export const memClear = () => {
    return({type:MEMORY_CLEAR})
}