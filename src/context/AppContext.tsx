import { QuestionsType } from "../types";
import { Storage } from "../utils";
import React, { createContext, useContext, useState } from "react";

type AppContextType = {
  step: number;
  page: number;
  category: string;
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

  const value = {
    questionWithResponse,
    setQuestionWithResponse,
    step,
    setStep,
    page,
    setPage,
    category,
    setCategory
  }
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext) as AppContextType
export default AppContextProvider;