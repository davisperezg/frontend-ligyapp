import { Button } from "@mui/material";
import { useState } from "react";
import BreadCrumbsPage from "../../components/BreadCrumbsPage/Index";
import CategoryCreate from "../../components/Category/CategoryCreate";
import { useBread } from "../../components/hooks/useBread";
import { Options } from "./CategoryStyle";

const CategoryScreen = () => {
  const [
    module,
    idMenu,
    idModule,
    goMenu,
    isLoadingModule,
    isErrorModule,
    errorModule,
  ] = useBread();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <BreadCrumbsPage
        goMenu={goMenu}
        idModule={idModule}
        isLoadingModule={isLoadingModule}
        isErrorModule={isErrorModule}
        module={module}
        idMenu={idMenu}
        nameBread="Categorias"
      />

      <Options>
        <Button variant="outlined" onClick={handleClickOpen}>
          Crear Categoria
        </Button>
      </Options>

      <CategoryCreate handleClose={handleClose} open={open} />
    </>
  );
};

export default CategoryScreen;
