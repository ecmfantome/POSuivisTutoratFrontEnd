import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ModulePage from "./ui/pages/module/module.page";
import DashboardPage from "./ui/pages/home.page";
import { Grid2 } from "@mui/material";
import GroupePage from "./ui/pages/groupe/groupe.page";
import SideNavBar from "./ui/components/sideBar.component";
import { RoutesName } from "./services/Helpers.service";
import PlanningPage from "./ui/pages/planning.page";
import ParametrePage from "./ui/pages/parametre.page";
import GroupeUpdPage from "./ui/pages/groupe/groupeUpd.page";
import GroupeAddPage from "./ui/pages/groupe/groupeAdd.page";
import ModuleUpdPage from "./ui/pages/module/moduleUpd.page";
import ModuleAddPage from "./ui/pages/module/moduleAdd.page";
import Login from "./ui/pages/login.page";
import EffectuerPage from "./ui/pages/effectuer.page";
import { StateReducer } from "./strore/reducer/State.reducer";
import { useSignals } from "@preact/signals-react/runtime";
import { getModulesAPi } from "./restApi/Module.api";
import ModuleDetailsPage from "./ui/pages/module/moduleDetails.page";
import { getEffcetuerAPi } from "./restApi/Effecture.api";
import { getUsersAPi } from "./restApi/User.api";

const PageLayout: React.FC = () => {
  //Api
  getModulesAPi();
  getEffcetuerAPi();
  getUsersAPi();
  const isConnected = localStorage.getItem("isConnected");
  useSignals();
  return (
    <>
      <Grid2 container spacing={10}>
        <Grid2 size={2}>
          {(isConnected === "true" ||
            StateReducer.currentUserSignal.value.isConnected) && <SideNavBar />}
        </Grid2>
        <Grid2 size={10}>
          <Outlet />
        </Grid2>
      </Grid2>
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { path: RoutesName.login, element: <Login /> },
      { path: RoutesName.dashboard, element: <DashboardPage /> },

      //Path Module
      { path: RoutesName.module.modules, element: <ModulePage /> },
      {
        path: `${RoutesName.module.moduleUpd}/:id_module`,
        element: <ModuleUpdPage />,
      },
      {
        path: `${RoutesName.module.moduleDetails}/:id_module`,
        element: <ModuleDetailsPage />,
      },
      { path: RoutesName.module.moduleAdd, element: <ModuleAddPage /> },

      //Path Groupe
      { path: RoutesName.groupe.groupes, element: <GroupePage /> },
      {
        path: RoutesName.groupe.groupeAdd,
        element: <GroupeAddPage />,
      },
      {
        path: `${RoutesName.groupe.groupeUpd}/:id_groupe`,
        element: <GroupeUpdPage />,
      },
      { path: RoutesName.planning, element: <PlanningPage /> },
      {
        path: `${RoutesName.effectuer}/:id_groupe`,
        element: <EffectuerPage />,
      },
      { path: RoutesName.parametres, element: <ParametrePage /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default App;
