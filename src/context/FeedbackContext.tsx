import { useState, createContext, FC, PropsWithChildren } from "react";
import { v4 as uuid } from "uuid";

type FeedbackType = {
  id: number;
  text: string;
  rating: number;
};
type UpdatedFeedbackType = { item: FeedbackType; edited: boolean };
export type FeedbackContextType = {
  feedbacks: FeedbackType[];
  updatedFeedback: UpdatedFeedbackType;
  addFeedback: Function;
  deleteFeedback: Function;
  editFeedback: Function;
  updateFeedback: Function;
};
const FeedbackContext = createContext<FeedbackContextType | null>(null);

export const FeedbackProvider: FC<PropsWithChildren> = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, text: "this is test", rating: 3 },
  ]);
  const [updatedFeedback, setUpdatedFeedback] = useState<UpdatedFeedbackType>({
    item: { id: 0, text: "", rating: 1 },
    edited: false,
  });
  const addFeedback = (newFeedback: any) => {
    const newFeedbackWithID = { ...newFeedback, id: uuid() };
    setFeedbacks([newFeedbackWithID, ...feedbacks]);
  };
  const deleteFeedback = (id: number) => {
    console.log(id);
    const newFeedbacks = feedbacks.filter((item) => item.id !== id);
    setFeedbacks(newFeedbacks);
  };
  const editFeedback = (updatedItem: FeedbackType) => {
    console.log(updatedItem);
    setUpdatedFeedback({ item: updatedItem, edited: true });
  };

  const updateFeedback = (id: number, updatedItem: any) => {
    console.log(id, updatedItem);
    setFeedbacks(
      feedbacks.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
    setUpdatedFeedback({ edited: false, item: { id: 0, text: "", rating: 1 } });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        updatedFeedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
