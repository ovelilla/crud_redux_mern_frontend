import {
    SET_PRODUCT,
    CLEAR_PRODUCT,
    SET_SELECTED,
    CLEAR_SELECTED,
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    READ_PRODUCTS_START,
    READ_PRODUCTS_SUCCESS,
    READ_PRODUCTS_FAILURE,
    UPDATE_PRODUCT_START,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_MANY_PRODUCT_START,
    DELETE_MANY_PRODUCT_SUCCESS,
    DELETE_MANY_PRODUCT_FAILURE,
    SET_VALUE,
    SET_VALUES,
    CLEAR_VALUES,
    CLEAR_ERROR,
    CLEAR_ERRORS,
    CLEAR_ALERT,
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_DIALOG,
    CLOSE_DIALOG,
} from "@types/products";

const initialState = {
    values: {
        name: "",
        description: "",
        price: "",
    },
    product: null,
    products: [],
    selected: [],
    loading: false,
    errors: null,
    alert: null,
    modal: false,
    dialog: false,
};

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };
        case CLEAR_PRODUCT:
            return {
                ...state,
                product: null,
            };
        case SET_SELECTED:
            return {
                ...state,
                selected: action.payload,
            };
        case CLEAR_SELECTED:
            return {
                ...state,
                selected: [],
            };
        case CREATE_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...state.products, action.payload.product],
                alert: action.payload.alert,
                loading: false,
            };
        case CREATE_PRODUCT_FAILURE:
            return {
                ...state,
                errors: action.payload.errors,
                alert: action.payload.alert || state.alert,
                loading: false,
            };
        case READ_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            };
        case READ_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                loading: false,
            };
        case READ_PRODUCTS_FAILURE:
            return {
                ...state,
                errors: action.payload,
                loading: false,
            };
        case UPDATE_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product._id === action.payload.product._id) {
                        return action.payload.product;
                    }
                    return product;
                }),
                alert: action.payload.alert,
                loading: false,
            };
        case UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                errors: action.payload.errors,
                loading: false,
            };
        case DELETE_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter((product) => product._id !== action.payload._id),
                loading: false,
            };
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                errors: action.payload,
                loading: false,
            };
        case DELETE_MANY_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case DELETE_MANY_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter((product) => !action.payload.includes(product._id)),
                loading: false,
            };
        case DELETE_MANY_PRODUCT_FAILURE:
            return {
                ...state,
                errors: action.payload,
                loading: false,
            };
        case SET_VALUE:
            return {
                ...state,
                values: {
                    ...state.values,
                    [action.payload.name]: action.payload.value,
                },
            };
        case SET_VALUES:
            return {
                ...state,
                values: action.payload,
            };
        case CLEAR_VALUES:
            return {
                ...state,
                values: {
                    name: "",
                    description: "",
                    price: "",
                },
            };
        case CLEAR_ERROR:
            return {
                ...state,
                errors:
                    state.errors && state.errors.filter((error) => error.field !== action.payload),
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null,
            };
        case CLEAR_ALERT:
            return {
                ...state,
                alert: null,
            };
        case OPEN_MODAL:
            return {
                ...state,
                modal: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modal: false,
            };
        case OPEN_DIALOG:
            return {
                ...state,
                dialog: true,
            };
        case CLOSE_DIALOG:
            return {
                ...state,
                dialog: false,
            };
        default:
            return state;
    }
}

export default productsReducer;
