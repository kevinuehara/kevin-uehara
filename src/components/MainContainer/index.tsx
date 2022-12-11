import { PropsWithChildren } from "react";

interface MainContainerProps {
  title?: string;
}

export const MainContainer: React.FC<PropsWithChildren<MainContainerProps>> = ({
  children,
  title = "",
}) => {
  return (
    <div className="flex flex-col w-screen h-screen dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
};
