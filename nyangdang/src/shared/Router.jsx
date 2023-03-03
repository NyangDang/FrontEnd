import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../component/features/LoginForm/LoginForm";
import SignupForm from "../component/features/SignupForm/SignupForm";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Uploadcontent from "../pages/Uploadcontent";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/main" element={<Main />} />
        <Route path="/uploadcontent" element={<Uploadcontent />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
