import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackStats() {

  //use context api 
  const { feedback } = useContext(FeedbackContext);

  // calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="d-lg-flex justify-content-between mb-3">
      <h4>{feedback.length} Review</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
