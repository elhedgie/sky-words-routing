import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "../pages/Main";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import NewWordPage from "../pages/NewWord";
import WordPage from "../pages/Word";
import TrainPage from "../pages/Train";
import NotFoundPage from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage loading={loading} />}>
          <Route path="/card/add" element={<NewWordPage />} />
          <Route path="/card/:id" element={<WordPage />} />
          <Route path="/train" element={<TrainPage />} />
        </Route>
      </Route>
      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
