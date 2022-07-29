import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "@emotion/styled";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridFooterContainer, GridFooter, esES } from "@mui/x-data-grid";
import { indigo } from "@mui/material/colors";

import { setProduct } from "@actions/products/product";
import { readProducts } from "@actions/products/read";
import { setSelected } from "@actions/products/selected";
import { openDialog } from "@actions/products/dialog";

import Load from "@components/ui/Load";

import formatCurrency from "@helpers/formatCurrency";

const Table = styled(DataGrid)`
    overflow: hidden;
    border: none;

    &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
    &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within,
    &.MuiDataGrid-root .MuiDataGrid-cell:focus,
    &.MuiDataGrid-root .MuiDataGrid-cell:focus-within {
        outline: none;
    }
`;

const Container = styled("div")`
    position: relative;
    height: 500px;
    width: 100%;
`;

const Products = ({ setMenu }) => {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products);
    const selected = useSelector((state) => state.products.selected);
    const loading = useSelector((state) => state.products.loading);

    const columns = [
        {
            field: "name",
            headerName: "Nombre",
            minWidth: 170,
            flex: 1,
            editable: false,
        },
        {
            field: "description",
            headerName: "Descripción",
            minWidth: 170,
            flex: 1,
            editable: false,
        },
        {
            field: "price",
            headerName: "Precio",
            minWidth: 170,
            flex: 1,
            type: "number",
            editable: false,
            valueFormatter: (params) => formatCurrency(params.value),
        },
        {
            field: "actions",
            headerName: "Acciones",
            minWidth: 170,
            flex: 1,
            headerAlign: "center",
            align: "center",
            editable: false,
            sortable: false,
            renderCell: (params) => {
                const handleClick = (e) => {
                    e.stopPropagation();

                    setMenu({
                        anchorEl: e.currentTarget,
                        open: true,
                    });

                    dispatch(setProduct(params.row));
                };

                return (
                    <Tooltip title="Acciones">
                        <IconButton aria-label="actions" onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                    </Tooltip>
                );
            },
        },
    ];

    const Footer = () => {
        const FooterContainer = styled(GridFooterContainer)`
            min-height: 60px;
            align-items: initial;
        `;

        const Footer = styled(GridFooter)`
            flex-grow: 1;
            min-height: initial;
            padding-right: 10px;
            background-color: ${selected.length > 0 && indigo[50]};
            border: none;
        `;

        const Icon = styled("div")`
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: stretch;
            width: 60px;
            background-color: ${indigo[50]};
        `;

        const handleClick = () => {
            dispatch(openDialog());
        };

        return (
            <FooterContainer>
                {selected.length > 0 && (
                    <Icon>
                        <Tooltip title="Borrar">
                            <IconButton aria-label="actions" onClick={handleClick}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Icon>
                )}
                <Footer />
            </FooterContainer>
        );
    };

    useEffect(() => {
        dispatch(readProducts());
    }, []);

    return (
        <Container>
            {loading && <Load />}

            <Table
                rows={products}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                getRowId={(row) => row._id}
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                onSelectionModelChange={(newSelectionModel) => {
                    dispatch(setSelected(newSelectionModel));
                }}
                components={{ Footer }}
                checkboxSelection
                disableColumnMenu
            />
        </Container>
    );
};

export default Products;
