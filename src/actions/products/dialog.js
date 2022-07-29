import { OPEN_DIALOG, CLOSE_DIALOG } from "@types/products";

export const openDialog = () => {
    return (dispatch) => {
        dispatch({
            type: OPEN_DIALOG,
        });
    };
};

export const closeDialog = () => {
    return (dispatch) => {
        dispatch({
            type: CLOSE_DIALOG,
        });
    };
};
