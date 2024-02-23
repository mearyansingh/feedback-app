/**component  */
import { createContext, useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //initial state
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //function for deleting feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //function for adding feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    console.log(data, "data");
    console.log(newFeedback, "newFeedback");

    setFeedback([data, ...feedback]);

    //adding random id to an object
    // newFeedback.id = uuidv4();
    // setFeedback([newFeedback, ...feedback]);
    // console.log(newFeedback);
  };

  //function for edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
    console.log(feedbackEdit, "feedbackEdit");
  };

  //Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
    console.log(id, updItem);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );

    if (!response.ok) {
      throw new Error(`Error fetching feedback. Status: ${response.status}`);
    }

    const data = await response.json();
    setFeedback(data);
    console.log(data, "data");
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
