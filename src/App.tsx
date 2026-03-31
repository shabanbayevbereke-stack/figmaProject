import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { EboutUsPage } from "./pages/EboutUsPage/EboutUsPage";
import { ItemPage } from "./pages/ItemPage/ItemPage";
import { SellPage } from "./pages/SellPage/SellPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { Meinheder } from "./component/meinheder/meinheder";

function App() {
  return (
    <Routes>
      <Route element={<Meinheder />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ebout" element={<EboutUsPage />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route
          path="*"
          element={
            <h1>
              404
              <br />
              Page don't found
            </h1>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
