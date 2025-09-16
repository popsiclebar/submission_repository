import { useState } from 'react'
import './APP.css'

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
    if (props.text === 'positive') {
      if (props.value === 'NaN%') {
        return <div>{props.text} 0</div>
      } else {
        return <StatisticLine text = {props.text} value = {props.value} />
      }
  } else {
      if (isNaN(props.value)) {
        return <div>{props.text} 0</div>
      } else {
        return <StatisticLine text = {props.text} value = {props.value} />
      }
  }
}

const StatisticLine = (props) => {
  return <div>{props.text} {props.value}</div>
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const averageScore = (good * 1 + neutral * 0 - bad * 1) / total
  const positiveFeedback = (good / total) * 100


  const feedbackGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const feedbackNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const feedbackBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
        <Button onClick = {feedbackGood} text = 'good' />
        <Button onClick = {feedbackNeutral} text = 'neutral' />
        <Button onClick = {feedbackBad} text = 'bad' />

      <h1>statistics</h1>
      {total === 0 ? (
        <div>No feedback given</div>
      ) : (
        <table className='table'>
          <tbody>
            <tr>
              <td><StatisticLine text ='good'/></td>
              <td><StatisticLine value = {good}/></td>
            </tr>
            <tr>
              <td><StatisticLine text ='neutral' /></td>
              <td><StatisticLine value = {neutral}/></td>
            </tr>
            <tr>
              <td><StatisticLine text ='bad' /></td>
              <td><StatisticLine value = {bad}/></td>
            </tr>
            <tr>
              <td><StatisticLine text ='all' /></td>
              <td><StatisticLine value = {total}/></td>
            </tr>
            <tr>
              <td><StatisticLine text ='avarage' /></td>
              <td><StatisticLine value = {averageScore.toFixed(1)}/></td>
            </tr>
            <tr>
              <td><StatisticLine text ='positive' /></td>
              <td><StatisticLine value = {`${positiveFeedback.toFixed(1)}%`} /></td>
            </tr>
          </tbody>
        </table>
      )}
      
    </div>
  )
}

export default App
