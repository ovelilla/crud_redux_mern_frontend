import { SET_SELECTED, CLEAR_SELECTED } from "@types/products";

export const setSelected = (selected) => {
    return (dispatch) => {
        dispatch({
            type: SET_SELECTED,
            payload: selected,
        });
    };
};

export const clearSelected = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_SELECTED,
        });
    };
};
