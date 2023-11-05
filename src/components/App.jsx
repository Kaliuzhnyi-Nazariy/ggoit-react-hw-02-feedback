import { Component } from "react";
import { Statistics } from './Statistics'
import { Section } from "./Section";
import { Notification } from "./Notification"; 
import { FeedbackOptions } from './FeedbackOptions.js'
import { BlockOfButtons } from "./BlockOfButtons";

class Button extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStatePos = () => {
    this.setState(pervState => {
      return {
        good: pervState.good + 1,
      }
    })
  }

  updateStateNeutr = () => {
    this.setState(pervState => {
      return {
        neutral: pervState.neutral + 1,
      }
    })
  }

  updateStateBad = () => {
    this.setState(pervState => {
      return {
        bad: pervState.bad + 1
      }
    })
  }

  render() {
    const totalState = this.state.good + this.state.neutral + this.state.bad;
    const percentOfGood = Math.round(this.state.good / totalState * 100)
    return (
      <div>
        <Section title='Please leave feedback'>
          <BlockOfButtons>
          <FeedbackOptions options={this.updateStatePos} onLeaveFeedback='good'/>
          <FeedbackOptions options={this.updateStateNeutr} onLeaveFeedback='neutral'/>
          <FeedbackOptions options={this.updateStateBad} onLeaveFeedback='bad'/>
          </BlockOfButtons>
        </Section>
        
        <Section title='Statistics'>
          {this.state.good || this.state.neutral || this.state.bad ? 
            (<Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              otal={totalState}
              positivePercentage={percentOfGood} />) :
              <Notification message="There is no feedback" /> }
            </Section>
      </div>
    )
  }
}

export const App = () => {
  return (
    <div style={{padding: 25}}>
      <Button />
    </div>
  );
};

