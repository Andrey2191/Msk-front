import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Create() {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const sendDataToAPI = () => {
    axios
      .post(`http://localhost:5000/items`, {
        title,
        price,
      })
      .then(() => {
        history.push("/read");
      });
  };
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Model</label>
          <input
            name="model"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="iphone"
          />
        </Form.Field>
        <Form.Field>
          <label>Cost</label>
          <input
            name="cost"
            placeholder="000"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={sendDataToAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
