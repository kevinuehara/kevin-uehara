import { MoonIcon, SunIcon } from "../icons";

interface SwitchThemeButtonProps {
  theme?: string;
  switchTheme?: () => void;
}

export const SwitchThemeButton = ({
  theme,
  switchTheme,
}: SwitchThemeButtonProps) => {
  return (
    <div className="w-5 cursor-pointer" onClick={switchTheme}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};
