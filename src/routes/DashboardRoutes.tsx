import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../components/layout/Index";
import IndexScreen from "../views/Index";
import MenuScreen from "../views/Menu/MenuScreen";
import RoleScreen from "../views/Role/RoleScreen";
import UserScreen from "../views/User/UserScreen";
import "react-toastify/dist/ReactToastify.css";
import ModuleScreen from "../views/Modules/ModuleScreen";
import NotFoundScreen from "../views/NotFound/NotFoundScreen";
import PermissionsScreen from "../views/Permissions/PermissionsScreen";
import ProfileScreen from "../views/Profile/ProfileScreen";
import ClubScreen from "../views/Club/ClubScreen";
import CategoryScreen from "../views/Category/CategoryScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="*" element={<NotFoundScreen />} />
          <Route path="/" element={<IndexScreen />} />
          <Route path="/module/:id" element={<MenuScreen />} />
          <Route
            path="/module/:idModule/menu/:idMenu/usuarios"
            element={<UserScreen />}
          />
          <Route
            path="/module/:idModule/menu/:idMenu/roles"
            element={<RoleScreen />}
          />
          <Route
            path="/module/:idModule/menu/:idMenu/modulos"
            element={<ModuleScreen />}
          />
          <Route
            path="/module/:idModule/menu/:idMenu/permisos"
            element={<PermissionsScreen />}
          />
          <Route
            path="/module/:idModule/menu/:idMenu/categorias"
            element={<CategoryScreen />}
          />
          <Route
            path="/module/:idModule/menu/:idMenu/clubs"
            element={<ClubScreen />}
          />
          <Route
            path="/module/:idModule/menu/:idMenu/perfiles"
            element={<ProfileScreen />}
          />
        </Routes>
        <ToastContainer />
      </Layout>
    </>
  );
};
