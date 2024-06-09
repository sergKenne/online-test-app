import './result.scss'
import { Storage, getPercent, getScore } from '../../utils'
import { FiCircle } from "react-icons/fi";
import { GoCheckCircleFill } from "react-icons/go";
import { FaCircleXmark } from "react-icons/fa6";
import { Question } from '../../types';
import { useAppContext } from '../../context/AppContext';

const ResultPage = () => {
  const { questionWithResponse, setPage, setStep, setCategory, minutes, seconds } = useAppContext() 
  let nb_minutes = Storage.getItem("minutes") || minutes
  let nb_seconds = Storage.getItem("seconds") || seconds
  if (nb_minutes == 0 && nb_seconds == 0) {
    nb_minutes = questionWithResponse.length-1
    nb_seconds = 59
  } else {
    nb_minutes = (questionWithResponse.length - nb_minutes) - 1
    nb_seconds = 60 - nb_seconds
  }

  const passTestAgain = () => {
    localStorage.clear();
    setPage(1)
    setStep(1)
    setCategory("")
  }
  
  return (
    <div className="result">
      <div className="container">
        <h1 className="result__title">
          <span>Результат</span>
          <button className='result__btn' onClick={passTestAgain}>Пройти еще раз</button>
        </h1>
        <ul className="result__list">
          <li className="result__list-item">
            <span>Количество баллов (правильных ответов)</span>
            <span>{getScore(questionWithResponse) }</span>
          </li>
          <li className="result__list-item">
            <span>Максимально возможное количество баллов</span>
            <span>{questionWithResponse.length }</span>
          </li>
          <li className="result__list-item">
            <span>Процент</span>
            <span>{getPercent(questionWithResponse).toFixed(2)}%</span>
          </li>
          <li className="result__list-item">
            <span>Потрачено времени</span>
            <span>{nb_minutes < 10 ? `0${nb_minutes}` : nb_minutes}:{nb_seconds < 10 ? `0${nb_seconds}` : nb_seconds}</span>
          </li>
        </ul>
        <ul className="result__card">
          {questionWithResponse.map((question:Question) => (
            <li className="result__card-item" key={question.id} style={(question.result === "") ? {opacity:0.5}:{} }>
              <p className="result__cart-question">{ question.name}</p>
              <ul className="result__sub-card">
                {question.lists.map((list:string) => (
                  <li className="result__sub-card-item" key={list}>
                    {
                      (question.answer[0] === list)
                        ? (question.result === "") 
                          ?<FiCircle className="result__status-icon" />
                          :< GoCheckCircleFill className="result__status-icon result__status-icon--success" />
                        
                        : ((question.result === list) && (question.answer[0] !== list))
                          ? <FaCircleXmark className="result__status-icon result__status-icon--error" />
                          :<FiCircle className="result__status-icon" />
                    }
                    <span
                      className="result__status-text"
                      style={((question.result === list) && (question.answer[0] !== list)) ? { textDecoration: "line-through"} : {}}
                    >{list}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResultPage