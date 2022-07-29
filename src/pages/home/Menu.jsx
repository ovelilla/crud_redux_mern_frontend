import { useSelector, useDispatch } from "react-redux";

import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { setValues } from "@actions/products/values";
import { setProduct } from "@actions/products/product";
import { openModal } from "@actions/products/modal";
import { openDialog } from "@actions/products/dialog";

const Menu = ({ menu, setMenu }) => {
    const dispatch = useDispatch();

    const product = useSelector((state) => state.products.product);

    const handleClose = () => {
        dispatch(setProduct(null));
        setMenu({ ...menu, open: false });
    };

    const handleOpenModal = () => {
        setMenu({ ...menu, open: false });
        dispatch(openModal());
        dispatch(
            setValues({
                name: product.name,
                description: product.description,
                price: product.price,
            })
        );
    };

    const handleOpenDialog = () => {
        setMenu({ ...menu, open: false });
        dispatch(openDialog());
    };

    return (
        <MuiMenu
            anchorEl={menu.anchorEl}
            id="project-menu"
            open={menu.open}
            onClose={handleClose}
            variant="menu"
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: "visible",
                    width: "100%",
                    maxWidth: 180,
                    filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.1))",
                    borderRadius: 2,
                    "& .MuiMenuItem-root": {
                        height: 50,
                        px: 2,
                    },
                },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
            <MenuItem onClick={handleOpenModal}>
                <ListItemIcon>
                    <EditIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Editar" />
            </MenuItem>

            <MenuItem onClick={handleOpenDialog}>
                <ListItemIcon>
                    <DeleteIcon fontSize="medium" />
                </ListItemIcon>
                <ListItemText primary="Eliminar" />
            </MenuItem>
        </MuiMenu>
    );
};

export default Menu;
