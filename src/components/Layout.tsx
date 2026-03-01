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
      className="font-inter dark:bg-zinc-900 dark:text-zinc-200 h-screen-safe relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[size:26px_26px] bg-fixed dark:bg-squared-dark bg-squared-light pointer-events-none"
      />
      <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-blob animation-delay-6000" />
      <div className="relative z-10 h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
