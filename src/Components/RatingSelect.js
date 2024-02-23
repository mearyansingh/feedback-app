import { useState, useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import FeedbackContext from "../Context/FeedbackContext";

function RatingSelect({ select }) {
  // initial state
  const [selected, setSelected] = useState(10);

  //used context
  const { feedbackEdit } = useContext(FeedbackContext);

  //function for selecting the rating value
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  return (
    <div>
      <ul className="list-unstyled d-flex flex-wrap">
        <li>
          <Form.Check
            inline
            type="radio"
            id="num1"
            name="rating"
            value="1"
            onChange={handleChange}
            checked={selected === 1}
            label="1"
          />
        </li>
        <li>
          <Form.Check
            inline
            type="radio"
            id="num2"
            name="rating"
            value="2"
            onChange={handleChange}
            checked={selected === 2}
            label="2"
          />
        </li>
        <li>
          <Form.Check
            inline
            type="radio"
            id="num3"
            name="rating"
            value="3"
            onChange={handleChange}
            checked={selected === 3}
            label="3"
          />
        </li>
        <li>
          <Form.Check
            inline
            type="radio"
            id="num4"
            name="rating"
            value="4"
            onChange={handleChange}
            checked={selected === 4}
            label="4"
          />
        </li>
        <li>
          <Form.Check
            inline
            type="radio"
            id="num5"
            name="rating"
            value="5"
            onChange={handleChange}
            checked={selected === 5}
            label="5"
          />
        </li>
        <li>
          <Form.Check
            inline
            type="radio"
            id="num6"
            name="rating"
            value="6"
            onChange={handleChange}
            checked={selected === 6}
            label="6"
          />
        </li>
        <li>
          <Form.Check
            inline
            type="radio"
            id="num7"
            name="rating"
            value="7"
            onChange={handleChange}
            checked={selected === 7}
            label="7"
          />
        </li>
        <li>
          <Form.Check
            inline
            type="radio"
            id="num8"
            name="rating"
            value="8"
            onChange={handleChange}
            checked={selected === 8}
            label="8"
          />
        </li>
        <li>
          <Form.Check
            inline
            type="radio"
            id="num9"
            name="rating"
            value="9"
            onChange={handleChange}
            checked={selected === 9}
            label="9"
          />
        </li>
        <li>
          <Form.Check
            inline
            type="radio"
            id="num10"
            name="rating"
            value="10"
            onChange={handleChange}
            checked={selected === 10}
            label="10"
          />
        </li>
      </ul>
    </div>
  );
}

export default RatingSelect;
