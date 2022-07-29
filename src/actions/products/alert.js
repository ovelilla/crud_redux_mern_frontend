import { CLEAR_ALERT } from "@types/products";

export const clearAlert = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_ALERT,
        });
    };
};
