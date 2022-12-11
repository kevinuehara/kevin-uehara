import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextProps {
  theme?: string;
  switchTheme?: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    const newTheme = theme === "" ? "dark" : "";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const themeSaved = localStorage.getItem("theme") || "";
    setTheme(themeSaved);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
