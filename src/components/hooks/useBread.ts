import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useModule } from "./useModules";
import { Module } from "../../interface/Module";

const initialState = {
  name: "",
  menu: [],
};

export const useBread = (): [
  Module,
  string,
  string,
  () => void,
  boolean,
  boolean,
  any
] => {
  const { idModule, idMenu } = useParams();
  const navigate = useNavigate();
  const goMenu = () => navigate(`/module/${idModule}`);
  const {
    data: dataModule,
    isLoading: isLoadingModule,
    isError: isErrorModule,
    error: errorModule,
  } = useModule(String(idModule));

  const [module, setModule] = useState<Module>(initialState);

  useEffect(() => {
    if (dataModule) {
      setModule(dataModule);
    }
  }, [dataModule]);

  return [
    module,
    idMenu as string,
    idModule as string,
    goMenu,
    isLoadingModule,
    isErrorModule,
    errorModule,
  ];
};
