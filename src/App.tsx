import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { ProjectDetail } from "./components/ProjectDetail";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Navigation />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/project/:projectId" element={
            <>
              <ProjectDetail />
              <Footer />
            </>
          } />
          <Route path="*" element={
            <>
              <Navigation />
              <HomePage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}