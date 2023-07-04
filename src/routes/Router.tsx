import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Landing from "../pages/Landing/Landing";
import Software from "../pages/Software/Software";
import Design from "../pages/Design/Design";
import Art from "../pages/Art/Art";

export const Router = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/software" element={<Software />} />
        <Route path="/design" element={<Design />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </BrowserRouter>
  );
};
