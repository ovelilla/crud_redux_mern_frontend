import { OPEN_MODAL, CLOSE_MODAL } from "@types/products";

export const openModal = () => {
    return (dispatch) => {
        dispatch({
            type: OPEN_MODAL,
        });
    };
};

export const closeModal = () => {
    return (dispatch) => {
        dispatch({
            type: CLOSE_MODAL,
        });
    };
};
