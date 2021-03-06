import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  deleteModule,
  getModule,
  getModules,
  ppModules,
  restoreModel,
  getModulesList,
  findServiceByUser,
  createServiceUser,
} from "../../api/module";
import { Module } from "../../interface/Module";

const KEY = "modules";

interface ICreateParams {
  dataModule: Module;
  idUpdateData?: string;
}

interface IDelteParams {
  id: string;
}

interface IError {
  request: {
    response: string;
  };
}

interface ICreateParamsService {
  body: {
    user: string;
    module: string[];
  };

  idUpdateData?: string;
}

export function useModules() {
  return useQuery<Module[], IError>([KEY], getModules);
}

export function useModulesList() {
  return useQuery<Module[], IError>([KEY + "list"], getModulesList);
}

export const useModule = (id: string) => {
  return useQuery<Module, IError>([KEY, id], () => getModule(id));
};

export const useDeleteModule = () => {
  const queryClient = useQueryClient();

  return useMutation<Boolean, IError, IDelteParams>(
    ({ id }) => deleteModule(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([KEY + "list"]);
      },
    }
  );
};

export const useMutateModule = () => {
  const queryClient = useQueryClient();

  return useMutation<Module, IError, ICreateParams>(
    ({ dataModule, idUpdateData }) => ppModules(dataModule, idUpdateData),
    {
      onSuccess: (res: any) => {
        if (!res.module) {
          queryClient.invalidateQueries([KEY + "list"]);
        } else {
          const { module } = res;
          queryClient.setQueryData([KEY + "list"], (prevModules: any) =>
            prevModules.concat(module)
          );
          queryClient.invalidateQueries([KEY + "list"]);
        }
      },
    }
  );
};

export const useRestoreModule = () => {
  const queryClient = useQueryClient();
  return useMutation<Boolean, IError, IDelteParams>(
    ({ id }) => restoreModel(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([KEY + "list"]);
      },
    }
  );
};

export const useModulesByUser = (id: string) => {
  return useQuery<any, IError>([KEY + "list-user", id], () =>
    findServiceByUser(id)
  );
};

export const useMutateServicesUser = () => {
  const queryClient = useQueryClient();

  return useMutation<any, IError, ICreateParamsService>(
    ({ body, idUpdateData }) => createServiceUser(body, idUpdateData),
    {
      onSuccess: (res: any) => {
        queryClient.invalidateQueries([KEY + "list-user"]);
      },
    }
  );
};
