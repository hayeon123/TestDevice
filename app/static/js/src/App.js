import React from "react";
import { Route } from "react-router-dom";
import DeviceListPage from "./pages/DeviceListPage";
import DeviceInfoPage from "./pages/DeviceInfoPage";
import UserInfoPage from "./pages/UserInfoPage";
import DeviceInsertPage from "./pages/DeviceInsertPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <>
      <Route component={LoginPage} path={"/login"} />
      <Route component={RegisterPage} path={"/register"} />
      <Route component={DeviceListPage} path="/" exact />
      <Route component={DeviceInfoPage} path="/device/info/:id" exact />
      <Route component={UserInfoPage} path="/user/info/:id" exact />
      <Route component={DeviceInsertPage} path="/device/insert" exact />
    </>
  );
}

export default App;
