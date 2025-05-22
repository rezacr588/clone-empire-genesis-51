import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex items-center justify-center flex-grow">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-empire-dark dark:text-white">404</h1>
          <p className="text-xl text-empire-medium dark:text-empire-light mb-4">Oops! Page not found</p>
          <a href="/" className="text-empire-cyan hover:text-empire-red underline">
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
