import { ReactNode } from "react";

type Prop = {
  children: ReactNode;
};

export const BadgeWrapper = ({ children }: Prop) => {
  return <div className="flex">{children}</div>;
};
