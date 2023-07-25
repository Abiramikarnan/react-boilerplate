import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../routes/routeConstants/appRoutes";

const useRedirect = () => {
  const navigate = useNavigate();

  const navigateToAppComponents = () => navigate(AppRoutes.APP_COMPONENTS);

  return {
    navigateToAppComponents,
  };
};

export default useRedirect;
