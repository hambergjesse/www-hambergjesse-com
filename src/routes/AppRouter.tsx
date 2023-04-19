import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/software" element={<Landing />} />
        <Route path="/design" element={<Landing />} />
        <Route path="/art" element={<Landing />} />
      </Routes>
    </Router>
  );
};
