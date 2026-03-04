import { RouterProvider, createBrowserRouter } from "react-router";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProjectDetail } from "./components/ProjectDetail";
import { BlogPostDetail } from "./components/BlogPostDetail";
import { ArticleDetail } from "./components/ArticleDetail";
import { NotFoundPage } from "./components/NotFoundPage";
import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Navigation />
            <HomePage />
            <Footer />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <AboutPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/project/:projectId",
        element: (
          <>
            <ProjectDetail />
            <Footer />
          </>
        ),
      },
      {
        path: "/blog/:postId",
        element: (
          <>
            <BlogPostDetail />
            <Footer />
          </>
        ),
      },
      {
        path: "/article/:articleId",
        element: (
          <>
            <ArticleDetail />
            <Footer />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <NotFoundPage />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}