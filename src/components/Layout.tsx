import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const parsedTheme = savedTheme as "dark" | "light";

    document.body.classList.add(parsedTheme);

    setTimeout(() => {
      const rootElement = document.getElementById("layout");
      if (rootElement) {
        rootElement.classList.add("transition-all", "duratopn-300");
      }
    }, 500);
  }, []);

  return (
    <div
      id="layout"
      className={`font-inter dark:bg-zinc-900 dark:text-zinc-200 h-screen 
        bg-[size:26px_26px] bg-fixed dark:bg-squared-dark bg-squared-light`}
    >
      <Outlet />
    </div>
  );
}

export default Layout;
