import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import RequireNetwork from "./shared/components/HOC/requireNetwork";
import "./styles/main.scss";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <RequireNetwork>
      <AuthProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </RequireNetwork>
  );
};

export default App;
