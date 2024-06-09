import React, { useEffect, useState } from 'react'
import "./category.scss"
import { QuestionsType } from '../../types';
import { Storage } from '../../utils';
import data, { CategoriesType } from '../../data';
import { useAppContext } from '../../context/AppContext';

const CategoryPage = () => {
  const {category, setPage, step, setStep, setQuestionWithResponse, questionWithResponse } = useAppContext() 
  const questions: QuestionsType = data.categories[category as keyof CategoriesType].questions 
  const [isCheck, setIsCheck] = useState<boolean>(false)
  const [minutes, setMinutes] = useState<number>(Storage.getItem("minutes") || questions.length-1);
  const [seconds, setSeconds] = useState<number>(Storage.getItem("seconds") || 59);
  
  const numberStep = (100 / questions.length).toFixed(3);
  const { id, name, lists } =  (step > questions.length) ? questions[questions.length - 1] : questions[step - 1]
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsCheck(true)
      questionWithResponse.forEach(question => {
        if (question.id === id) {
          question.result =e.target.value
        }
      })
      setQuestionWithResponse(JSON.parse(JSON.stringify(questionWithResponse)))
      Storage.setItem("questionWithResponse", JSON.parse(JSON.stringify(questionWithResponse)))
    }
  }

  const incrementStep = () => {
    if (isCheck) {
      setStep(prev => prev + 1)
    }
    setIsCheck(false)
  }

  useEffect(() => {
    Storage.setItem("step", step)
    if ((minutes < 0) || (step > questions.length)) {
      setPage(3)
      Storage.setItem("page", 3)
      if (minutes === 0 && seconds === 0) {
        Storage.setItem("questionWithResponse", JSON.parse(JSON.stringify(questions)))
      }
    }
  }, [step, minutes, seconds])

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev:number) => prev - 1)
      if (seconds === 0) {
        setSeconds(59);
        setMinutes((prev:number) => prev - 1) 
        console.log("minutes:", minutes)
      }
      Storage.setItem("minutes", minutes)
      Storage.setItem("seconds", seconds -1)
    }, 1000)
    
    return () => {
      clearInterval(timer)
    }
  }, [seconds])

  useEffect(() => {
    setQuestionWithResponse(Storage.getItem("questionWithResponse") || JSON.parse(JSON.stringify(questions))) 
  }, [])

  return (
    <div className="category">
      <div className="container">
        <div className="category__test">
          <h2 className="category__test-title">Тестирование
            <span className="category__test-timer">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}`: seconds}</span>
          </h2>
          <ul className="category__progress-bar">
            {Array(questions.length).fill("t").map((el, index) => (
              <li className="category__progress-item" style={{ width: numberStep + "%"}} key={el+index}>
                <div className={`category__progress-step ${(step > index+1) ? "pass" : ""} ${index+1 === step ? "active" : ""}`}></div>
              </li>
            ))}
          </ul>
          <h4 className="category__question">{ name}</h4>
          <ul className="category__list">
            {lists.map((list) => (
              <li className="category__list-item" key={list}>
                <label className="category__list-label" htmlFor={list}>
                  <input
                    onChange={handleChange}
                    type="radio" name="radio"
                    id={list}
                    value={list}
                    disabled={(step > questions.length) ? true: false}
                    className="category__list-input"
                  />
                  <span className="category__list-box" style={(step > questions.length) ? { cursor: "not-allowed" } : {}}></span>
                  <span className="category__list-text" style={(step > questions.length) ? { cursor: "not-allowed" } : {}}>{list}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="category__buttons">
            <button className='category__btn' onClick={incrementStep}>Ответить</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage