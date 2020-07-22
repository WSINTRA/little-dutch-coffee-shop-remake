import React from "react";
import { Table } from "semantic-ui-react";

const createTableOfOrders = (orders) => {
  return orders.map((order) => (
    
    <Table.Row key={order.id}>
      <Table.Cell>{order.id}</Table.Cell>
      <Table.Cell>{new Date(order.created_at).toDateString()}</Table.Cell>
      <Table.Cell>{order.total}</Table.Cell>
    </Table.Row>
  ));
};

const YourOrders = (props) => {
  return (
    <>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Order No.</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {createTableOfOrders(props.currentUser.orders)}
        </Table.Body>
      </Table>
    </>
  );
};
export default YourOrders;
