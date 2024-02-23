import { useState, useContext, useEffect } from "react";
import { Card, Form, InputGroup, Button } from "react-bootstrap";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  //used context
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  //function for handling the text
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters.");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  //function for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
    console.log("hell0", feedbackEdit);
  }, [feedbackEdit]);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="h4">
              How would you rate your service with us?
            </Form.Label>
            <RatingSelect select={(rating) => setRating(rating)} />
            <InputGroup>
              <Form.Control
                onChange={handleTextChange}
                value={text}
                placeholder="Write a review"
              />
              <Button
                variant="outline-secondary"
                type="submit"
                disabled={btnDisabled}
              >
                send
              </Button>
            </InputGroup>
            {message && <small className="text-danger">{message}</small>}
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default FeedbackForm;
