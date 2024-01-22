import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspender } from "./Suspender";
import { LinkButton } from "./LinkButton";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Its home, go to <LinkButton />
            </div>
          }
        />
        <Route path="/timer" element={<Suspender />} />
      </Routes>
    </Router>
  );
};
