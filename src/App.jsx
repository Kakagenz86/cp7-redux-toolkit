import HomePages from "./pages/HomePages/homepages"
import MenusPages from "./pages/MenusPages/menuspages"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/menus" element={<MenusPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;