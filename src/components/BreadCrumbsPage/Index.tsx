import { Breadcrumbs, IconButton, Tooltip, Typography } from "@mui/material";
import { BackIndex, TitleBack } from "./IndexStyle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  goMenu: () => void;
  idModule: string;
  isLoadingModule: boolean;
  isErrorModule: boolean;
  module: any;
  idMenu: string;
  nameBread: string;
}

const BreadCrumbsPage = ({
  goMenu,
  idModule,
  isLoadingModule,
  isErrorModule,
  module,
  idMenu,
  nameBread,
}: Props) => {
  return (
    <BackIndex>
      <Tooltip title="Regresar" arrow onClick={goMenu}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
      <Breadcrumbs aria-label="breadcrumb">
        <TitleBack to={`/`}>Modulos</TitleBack>
        <TitleBack to={`/module/${idModule}`}>
          {isLoadingModule
            ? "Obteniendo modulo..."
            : isErrorModule
            ? "#"
            : module?.name}
        </TitleBack>
        <Typography color="text.primary">
          {module?.menu.some((a: any) => a._id === idMenu) ? nameBread : "#"}
        </Typography>
      </Breadcrumbs>
    </BackIndex>
  );
};

export default BreadCrumbsPage;
