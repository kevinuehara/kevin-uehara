import { PropsWithChildren } from "react";

interface MainContainerProps {
  title?: string;
}

export const MainContainer: React.FC<PropsWithChildren<MainContainerProps>> = ({
  children,
  title = "",
}) => {
  return (
    <div className="flex flex-col m-5">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
};
