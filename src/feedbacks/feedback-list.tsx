import { useContext } from "react";
import FeedbackItem from "./feedback-item";
import FeedbackContext, {
  FeedbackContextType,
} from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext) as FeedbackContextType;
  return (
    <div>
      {feedbacks.map((feedback) => (
        <FeedbackItem feedback={feedback} />
      ))}
    </div>
  );
};

export default FeedbackList;
