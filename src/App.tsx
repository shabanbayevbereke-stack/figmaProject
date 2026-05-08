import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { EboutUsPage } from "./pages/EboutUsPage/EboutUsPage";
import { DoctorPage } from "./pages/DoctorPage/DoctorPage";
import { SellPage } from "./pages/SellPage/SellPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { MainHeader } from "./features/MainHeader/MainHeader";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ProtectedRoute } from "./features/ProtectRouter";
import { UserListPage } from "./pages/UserListPage/UserListPage";
import { Toaster } from "sonner";
import { DiscountManager } from "./pages/Toaster/DiscountManager";

function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<MainHeader />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/item" element={<DiscountManager />} />
            <Route path="/about" element={<EboutUsPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/doctor" element={<DoctorPage />} />
              <Route path="/userlist" element={<UserListPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
