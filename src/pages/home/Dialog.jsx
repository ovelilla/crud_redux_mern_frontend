import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { deleteProduct } from "@actions/products/delete";
import { deleteManyProducts } from "@actions/products/delete";
import { closeDialog } from "@actions/products/dialog";

const Dialog = () => {
    const dispatch = useDispatch();

    const product = useSelector((state) => state.products.product);
    const selected = useSelector((state) => state.products.selected);
    const dialog = useSelector((state) => state.products.dialog);

    const handleClose = () => dispatch(closeDialog());

    const handleAction = () => {
        if (product) {
            dispatch(deleteProduct(product));
        } else {
            dispatch(deleteManyProducts(selected));
        }

        handleClose();
    };

    return (
        <MuiDialog
            open={dialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            BackdropProps={{
                style: {
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                },
            }}
            PaperProps={{
                style: {
                    boxShadow: "none",
                },
            }}
        >
            <DialogTitle id="alert-dialog-title">
                Eliminar {selected.length > 1 ? "productos" : "producto"}
            </DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    ¿Está seguro de eliminar {selected.length > 1 ? "estos productos" : "este producto"} ?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button size="large" onClick={handleClose}>
                    Cancelar
                </Button>

                <Button size="large" onClick={handleAction} autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </MuiDialog>
    );
};

export default Dialog;
