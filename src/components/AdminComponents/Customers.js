import * as React from "react";
import fetchCustomers from "../services/customerFetch";
import { Button, Image, Table } from "semantic-ui-react";

function Customers(props) {
  return (
    <div>
      <Button onClick={() => fetchCustomers(props.allCustomers)}>Update</Button>

      <Table className="table-style" basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Zip</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.customersData
            .filter((cust) => cust.staff !== true)
            .map((customer) => CustomerTable(customer))}
        </Table.Body>
      </Table>
    </div>
  );
}

const CustomerTable = (customer) => {
  return (
    <Table.Row key={customer.id}>
      <Table.Cell>
        <Image src={customer.avatar} rounded size="mini" />
        {customer.username}
      </Table.Cell>
      <Table.Cell>{customer.email}</Table.Cell>
      <Table.Cell>{customer.staff ? "Staff" : "Customer"}</Table.Cell>
      <Table.Cell>{customer.address}</Table.Cell>
      <Table.Cell>{customer.city}</Table.Cell>
      <Table.Cell>{customer.zip}</Table.Cell>
    </Table.Row>
  );
};

export default Customers;
