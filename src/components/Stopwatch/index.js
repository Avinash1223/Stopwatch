// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerStarted: false, TimeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeIntervalID)
  }

  onStartTimer = () => {
    this.timeIntervalID = setInterval(this.UpdateTime, 1000)
    this.setState({isTimerStarted: true})
    console.log('timer Started')
  }

  UpdateTime = () => {
    this.setState(prevState => ({
      TimeElapsedInSeconds: prevState.TimeElapsedInSeconds + 1,
    }))
  }

  onResetTimer = () => {
    clearInterval(this.timeIntervalID)
    this.setState({isTimerStarted: false, TimeElapsedInSeconds: 0})
    console.log('timer rested')
  }

  onStopTimer = () => {
    clearInterval(this.timeIntervalID)
    this.setState({isTimerStarted: false})
    console.log('timer stopped')
  }

  renderTimeInSeconds = () => {
    const {TimeElapsedInSeconds} = this.state
    const seconds = Math.floor(TimeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderTimeInMin = () => {
    const {TimeElapsedInSeconds} = this.state
    const Minutes = Math.floor(TimeElapsedInSeconds / 60)
    if (Minutes < 10) {
      return `0${Minutes}`
    }
    return Minutes
  }

  render() {
    const {isTimerStarted} = this.state
    const time = `${this.renderTimeInMin()}:${this.renderTimeInSeconds()}`

    return (
      <div className="app-container">
        <h1>Stopwatch</h1>
        <div className="stop-watch-container">
          <div className="logo-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              className="watch-icon"
              alt="stopwatch"
            />
            <p className="title">Timer</p>
          </div>
          <h1 className="timer">{time}</h1>
          <div className="button-container">
            <button
              type="button"
              className="button start"
              disabled={isTimerStarted}
              onClick={this.onStartTimer}
            >
              start
            </button>
            <button
              type="button"
              className="button stop"
              onClick={this.onStopTimer}
            >
              stop
            </button>
            <button
              type="button"
              className="button reset"
              onClick={this.onResetTimer}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
