import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Software from "../pages/Software/Software";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/software" element={<Software />} />
        <Route path="/design" element={<Landing />} />
        <Route path="/art" element={<Landing />} />
      </Routes>
    </Router>
  );
};
