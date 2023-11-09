import { Button } from 'components/Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(name => {
        return (
          <Button key={name} onClick={() => onLeaveFeedback(name)}>
            {name}
          </Button>
        );
      })}
    </div>
  );
};
