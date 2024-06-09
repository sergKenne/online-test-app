import { QuestionsType } from "../types";
import { Storage } from "../utils";
import React, { createContext, useContext, useState } from "react";

type AppContextType = {
  step: number;
  page: number;
  category: string;
  minutes: number;
  seconds: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  questionWithResponse: QuestionsType;
  setQuestionWithResponse: React.Dispatch<React.SetStateAction<QuestionsType>>
}

const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<number>(Storage.getItem("page") || 1)
  const [step, setStep] = useState<number>(Storage.getItem("step") || 1)
  const [category, setCategory] = useState<string>(Storage.getItem("category") || "")
  const [questionWithResponse, setQuestionWithResponse] = useState<QuestionsType>(Storage.getItem("questionWithResponse") || [])
  const [minutes, setMinutes] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(59);
  const value = {
    questionWithResponse,
    setQuestionWithResponse,
    step,
    setStep,
    page,
    setPage,
    category,
    setCategory,
    minutes,
    setMinutes,
    seconds,
    setSeconds

  }
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext) as AppContextType
export default AppContextProvider;