import { Routes, Route } from "react-router-dom";
import Layout from "./common/Layout/Layout";
import LoginPage from "./components/Auth/login/loginComponent";
import { PrivateRoute } from "./utitls/privateRoute";
import { allPrivateAppRoutes } from "./utitls/AllAppRoutes";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>

      <Routes>
        {allPrivateAppRoutes.map((items, index) => {
          return (
            <Route element={<Layout element={items.component} />}>
              <Route key={index} path={items.path} />
            </Route>
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
