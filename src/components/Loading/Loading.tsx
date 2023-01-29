import React, { useEffect, useState } from "react";

const wait = (
  setState: React.Dispatch<React.SetStateAction<string>>,
  ms: number
) => {
  setTimeout(() => {
    setState((prev) => prev + ".");
  }, ms);
};

export const Loading = () => {
  const [period, setPeriod] = useState<string>("");

  useEffect(() => {
    wait(setPeriod, 500);
    wait(setPeriod, 1000);
    wait(setPeriod, 1500);
  }, []);

  return (
    <div>
      <h1>{`Loading${period}`}</h1>
    </div>
  );
};
