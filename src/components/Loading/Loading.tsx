import React, { useEffect, useState } from "react";

const wait = (
  state: React.Dispatch<React.SetStateAction<boolean>>,
  ms: number
) => {
  setTimeout(() => {
    state(true);
  }, ms);
};

export const Loading = () => {
  const [period1, setPeriod1] = useState<boolean>(false);
  const [period2, setPeriod2] = useState<boolean>(false);
  const [period3, setPeriod3] = useState<boolean>(false);

  useEffect(() => {
    wait(setPeriod1, 500);
    wait(setPeriod2, 1000);
    wait(setPeriod3, 1500);
  }, []);

  return (
    <div>
      <h1>
        Loading
        {period1 ? "." : ""}
        {period2 ? "." : ""}
        {period3 ? "." : ""}
      </h1>
    </div>
  );
};
