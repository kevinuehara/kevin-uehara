import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
}

export const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
  return <div className={cn(className, "border-white border")}>{children}</div>;
};
