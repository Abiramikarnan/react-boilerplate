import { RouteObject, useRoutes } from "react-router-dom";
import { AppRoutes } from "./routeConstants/appRoutes";
import AppComponents from "../views/AppComponents";

const AppRouter = () => {
  const routes: RouteObject[] = [
    {
      path: AppRoutes.APP_COMPONENTS,
      element: <AppComponents />,
    },
  ];

  if (Boolean(process.env.REACT_APP_UNDER_DEVELOPMENT)) {
    routes.push({
      path: AppRoutes.APP_COMPONENTS,
      element: <AppComponents />,
    });
  }

  return useRoutes(routes);
};

export default AppRouter;
