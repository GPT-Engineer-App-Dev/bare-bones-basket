import { Home, FileText, Settings } from "lucide-react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Settings from "./pages/Settings.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "About",
    to: "/about",
    icon: <FileText className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <Settings />,
  },
];
