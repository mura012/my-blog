import React, { ReactNode } from "react";
import { Color } from "src/types/tailwindColor";

type Props = {
  children: ReactNode;
  color?: Color;
  bw?: Omit<Color, "black" | "white">;
};

export const Badge = ({ children, color, bw }: Props) => {
  return (
    <div
      className={`w-fit rounded-xl bg-${color}-100 bg-${bw} px-2 py-1 text-xs font-bold`}
    >
      {children}
    </div>
  );
};
