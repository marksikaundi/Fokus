import React, { createContext, useContext } from "react";

import { REST_SEC, WORK_SEC } from "@/constants/timer";
import { useTimer } from "@/hooks/use-timer";

type TimerContextValue = ReturnType<typeof useTimer> & {
  workDuration: number;
  restDuration: number;
};

const TimerContext = createContext<TimerContextValue | undefined>(undefined);

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const timer = useTimer({
    workDuration: WORK_SEC,
    restDuration: REST_SEC,
  });

  return (
    <TimerContext.Provider
      value={{
        ...timer,
        workDuration: WORK_SEC,
        restDuration: REST_SEC,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimerContext() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimerContext must be used within TimerProvider");
  }
  return context;
}
