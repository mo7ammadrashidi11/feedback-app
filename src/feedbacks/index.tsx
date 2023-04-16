import FeedbackList from "./feedback-list";
import FeedbackForm from "./feedback-form";
import { FeedbackProvider } from "../context/FeedbackContext";
function Feedback() {
  return (
    <FeedbackProvider>
      <div className="max-w-3xl m-auto">
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default Feedback;
