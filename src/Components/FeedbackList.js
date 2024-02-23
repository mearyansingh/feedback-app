import { Fragment, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackList() {
  const { feedback, deleteFeedback, editFeedback } =
    useContext(FeedbackContext);
  // const [text, setText] = useState("This is an example of a feedback item");

  // const handleClick = () => {
  //   setRating((prev) => prev + 1);
  // };

  return (
    <>
      {feedback && feedback.length > 0 ? (
        <Fragment>
          {feedback.map((item) => (
            <Card key={item.id} className="position-relative mb-4">
              <Card.Body className="body-bg">
                <div className="d-flex justify-content-end mb-2">
                  <Button className="me-3" onClick={() => editFeedback(item)}>
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button onClick={() => deleteFeedback(item.id)}>
                    <i className="bi bi-x-lg"></i>
                  </Button>
                </div>
                <Card.Text>{item.text}</Card.Text>
                <div className="rating-count bg-white d-flex align-items-center justify-content-center rounded-circle border">
                  {item.rating}
                </div>
                {/* <Button variant="secondary" onClick={handleClick}>
                  Click
                </Button> */}
              </Card.Body>
            </Card>
          ))}
        </Fragment>
      ) : (
        <Card className="position-relative">
          <Card.Body className="body-bg">
            <Card.Text>No feedback yet</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default FeedbackList;
