import { useRoutes } from "react-router-dom";
import { dashboardRoutes } from "../dashboard/index";

/*Criando AppRoutes para acessar os componentes das telas do sistema*/

const AppRoutes = () => {
    return useRoutes([
        ...dashboardRoutes,
    ]);
};

export default AppRoutes;