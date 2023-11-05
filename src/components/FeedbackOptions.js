import { Button } from 'components/Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <Button onClick={options}>{onLeaveFeedback}</Button>
    </div>
  );
};
