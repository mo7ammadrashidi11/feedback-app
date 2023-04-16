import React, { useContext } from "react";
import { FeedbackType } from "./feedbackData";
import FeedbackContext, {
  FeedbackContextType,
} from "../context/FeedbackContext";
import { RiCloseFill, RiEditLine } from "react-icons/ri";

const FeedbackItem: React.FC<{
  feedback: FeedbackType;
}> = ({ feedback }) => {
  const { deleteFeedback, editFeedback } = useContext(
    FeedbackContext
  ) as FeedbackContextType;
  return (
    <div className="flex justify-center">
      <div className=" relative bg-white p-5 my-2 w-full border rounded">
        <div className="absolute bg-pink-800 border rounded-full w-6 -top-2 -left-2">
          {feedback.rating}
        </div>
        <div className="absolute top-0 -right-0 flex ">
          <div
            className="text-green-600 cursor-pointer"
            onClick={() => editFeedback(feedback)}>
            <RiEditLine />
          </div>
          <div
            className="text-red-700 cursor-pointer"
            onClick={() => deleteFeedback(feedback.id)}>
            <RiCloseFill />
          </div>
        </div>

        <div>{feedback.text}</div>
      </div>
    </div>
  );
};

export default FeedbackItem;
