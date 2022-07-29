import { SET_VALUE, SET_VALUES, CLEAR_VALUES } from "@types/products";

export const setValue = (name, value) => {
    return (dispatch) => {
        dispatch({
            type: SET_VALUE,
            payload: {
                name,
                value,
            },
        });
    };
};

export const setValues = (values) => {
    return (dispatch) => {
        dispatch({
            type: SET_VALUES,
            payload: values,
        });
    };
};

export const clearValues = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_VALUES,
        });
    };
};
