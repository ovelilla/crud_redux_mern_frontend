import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";

import { setValue } from "@actions/products/values";
import { createProduct } from "@actions/products/create";
import { updateProduct } from "@actions/products/update";
import { clearError } from "@actions/products/errors";

import Load from "@components/ui/Load";

const form = {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: {
        xs: 2,
        md: 3,
    },
};

const Form = () => {
    const dispatch = useDispatch();

    const values = useSelector((state) => state.products.values);
    const product = useSelector((state) => state.products.product);
    const loading = useSelector((state) => state.products.loading);
    const errors = useSelector((state) => state.products.errors);
    const alert = useSelector((state) => state.products.alert);

    const handleChange = (e) => {
        const { name, value } = e.target;

        dispatch(setValue(name, value));

        if (errors && errors.some((error) => error.field === name)) {
            dispatch(clearError(name));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (product)    {
            dispatch(updateProduct(product, values));
        } else {
            dispatch(createProduct(values));
        }
    };

    return (
        <>
            {alert && <Alert severity={alert.type}>{alert.message}</Alert>}

            {loading && <Load />}

            <Box component="form" id="product-form" onSubmit={handleSubmit} noValidate sx={form}>
                <TextField
                    required
                    id="name"
                    label="Nombre"
                    name="name"
                    type="text"
                    value={values.name}
                    error={errors && errors.some((error) => error.field === "name")}
                    helperText={
                        errors && errors.map((error) => error.field === "name" && error.message)
                    }
                    onChange={handleChange}
                />

                <TextField
                    required
                    id="description"
                    label="Descripción"
                    name="description"
                    type="text"
                    value={values.description}
                    error={errors && errors.some((error) => error.field === "description")}
                    helperText={
                        errors &&
                        errors.map((error) => error.field === "description" && error.message)
                    }
                    onChange={handleChange}
                />

                <TextField
                    required
                    id="price"
                    label="Precio"
                    name="price"
                    type="text"
                    value={values.price}
                    error={errors && errors.some((error) => error.field === "price")}
                    helperText={
                        errors && errors.map((error) => error.field === "price" && error.message)
                    }
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">€</InputAdornment>,
                    }}
                />
            </Box>
        </>
    );
};

export default Form;
