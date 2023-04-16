import { useState, useContext, FormEvent, useEffect } from "react";
import RatingSelect from "./rating-select";
import FeedbackContext, {
  FeedbackContextType,
} from "../context/FeedbackContext";
const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, updatedFeedback, updateFeedback } = useContext(
    FeedbackContext
  ) as FeedbackContextType;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFeedback = {
      text,
      rating,
    };

    if (updatedFeedback.edited) {
      updateFeedback(updatedFeedback.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }
  };

  useEffect(() => {
    if (updatedFeedback.edited) {
      setText(updatedFeedback.item.text);
      setRating(updatedFeedback.item.rating);
    } else {
      setText("");
      setRating(1);
    }
  }, [updatedFeedback]);
  return (
    <div className="bg-white p-4">
      <form onSubmit={handleSubmit}>
        <h2>how would you rate your service with us ?</h2>
        <RatingSelect selected={rating} select={setRating} />

        <div className="flex justify-between p-1 border border-gray-400 bg-white rounded-lg">
          <input
            type="text"
            className="border-none grow-[2] focus:outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="text-white border-none rounded-md p-2 bg-red-500 cursor-pointer">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
