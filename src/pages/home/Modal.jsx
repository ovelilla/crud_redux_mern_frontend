import { useSelector, useDispatch } from "react-redux";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import MuiModal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";

import Form from "@pages/home/Form";

import { setProduct } from "@actions/products/product";
import { clearValues } from "@actions/products/values";
import { clearErrors } from "@actions/products/errors";
import { closeModal } from "@actions/products/modal";

const container = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    maxWidth: 600,
    bgcolor: "background.paper",
    borderRadius: 2,
};

const header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: { xs: "55px", sm: "60px", md: "65px", lg: "70px" },
    padding: { xs: "0 14px", sm: "0 16px", md: "0 18px", lg: "0 22px" },
    borderBottom: `1px solid ${grey[200]}`,
};

const title = {
    fontSize: { xs: 16, sm: 18, md: 20 },
    fontWeight: 300,
};

const body = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    position: "relative",
    padding: { xs: "14px", sm: "16px", md: "18px", lg: "22px" },
};

const footer = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 2,
    height: { xs: "65px", sm: "70px", md: "75px", lg: "80px" },
    padding: { xs: "0 14px", sm: "0 16px", md: "0 18px", lg: "0 22px" },
    borderTop: `1px solid ${grey[200]}`,
};

const Modal = () => {
    const dispatch = useDispatch();

    const product = useSelector((state) => state.products.product);
    const modal = useSelector((state) => state.products.modal);

    const handleClose = () => {
        dispatch(setProduct(null));
        dispatch(clearValues());
        dispatch(clearErrors());
        dispatch(closeModal());
    };

    return (
        <MuiModal
            open={modal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
                style: {
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                },
            }}
        >
            <Fade in={modal}>
                <Box sx={container}>
                    <Box sx={header}>
                        <Typography sx={title}>
                            {product ? "Editar producto" : "Crear producto"}
                        </Typography>

                        <IconButton onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box sx={body}>
                        <Form />
                    </Box>

                    <Box sx={footer}>
                        <Button
                            variant="outlined"
                            size="large"
                            color="primary"
                            aria-label="close"
                            onClick={handleClose}
                        >
                            Cerrar
                        </Button>

                        <Button
                            type="submit"
                            form="product-form"
                            variant="contained"
                            size="large"
                            color="primary"
                            aria-label="submit"
                            disableElevation
                        >
                            {product ? "Actualizar" : "Guardar"}
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </MuiModal>
    );
};

export default Modal;
