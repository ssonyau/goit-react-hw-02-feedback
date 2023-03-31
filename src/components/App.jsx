// import Feedback from './feedback/Feedback';
import React, { Component } from 'react';
import SectionTitle from './sectionTitle/SectionTitle';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  percentCalc = () => {
    return (
      (this.state.good * 100) /
      [this.state.good + this.state.neutral + this.state.bad]
    );
  };

  totaCalc = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  onLeaveFeedback = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            // options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.totaCalc() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totaCalc()}
              positivePercentage={Math.round(this.percentCalc())}
            />
          )}
        </SectionTitle>
      </div>
    );
  }
}