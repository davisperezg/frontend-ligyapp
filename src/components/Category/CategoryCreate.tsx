import {
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import { BootstrapDialog, BootstrapDialogTitle } from "../modal";
import { Category } from "../../interface/Category";
import { toast } from "react-toastify";
import { useMuateResource } from "../hooks/useResources";

interface Props {
  handleClose: () => void;
  open: boolean;
}

const initialState: Category = {
  name: "",
};

const CategoryCreate = ({ handleClose, open }: Props) => {
  const [category, setCategory] = useState<Category>(initialState);
  const { mutateAsync: mutateCP, isLoading: isLoadingCP } = useMuateResource();

  const handleChange = <P extends keyof Category>(
    prop: P,
    value: Category[P]
  ) => setCategory({ ...category, [prop]: value });

  const handleOk = async () => {
    try {
      // await mutateCP({
      //   body: permisssion,
      // });
      toast.success("Categoria registrado. !");
      clearValues();
      handleClose();
    } catch (e: any) {
      const error: Error = JSON.parse(e.request.response);
      toast.error(error.message);
    }
  };

  const clearValues = () => setCategory(initialState);

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Nueva Categoria
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box sx={{ p: 3, width: "100%", height: "100%" }}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <TextField
                  fullWidth
                  required
                  value={category.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  id="name-required"
                  label="Nombre"
                  autoComplete="off"
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  fullWidth
                  value={category.description || ""}
                  onChange={(e) => handleChange("description", e.target.value)}
                  id="description-required"
                  label="Descripción"
                  autoComplete="off"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="contained"
            autoFocus
            onClick={handleOk}
            disabled={isLoadingCP}
          >
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default CategoryCreate;
