import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/items`).then((getData) => {
      setApiData(getData.data);
    });
  }, []);

  const getData = () => {
    axios.get(`http://localhost:5000/items`).then((getData) => {
      setApiData(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:5000/items/${id}`).then(() => {
      getData();
    });
  };
  console.log(apiData);
  return (
    <div>
      <Link to="/">
        <Button color="green">Create</Button>
      </Link>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Cost</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data._id}</Table.Cell>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.price}</Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => onDelete(data._id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
