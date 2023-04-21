import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #ccc;
  text-align: left;
  padding: 10px;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Email = styled.p`
  font-size: 16px;
`;

function DataDisplay() {
  var exampleList = [
    {
      id: 1,
      name: "Potato",
      gender: "m",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Hun",
      gender: "m",
      email: "jane.doe@example.com",
    },
    {
      id: 3,
      name: "Eman",
      gender: "m",
      email: "jane.doe@example.com",
    },
    {
      id: 4,
      name: "Subz",
      gender: "m",
      email: "jane.doe@example.com",
    },
    {
      id: 4,
      name: "Jei",
      gender: "m",
      email: "jane.doe@example.com",
    },
  ];
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (id) => {
    setSelectedRow(id);
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Gender</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
          </tr>
        </thead>
        <tbody>
          {exampleList.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              selected={selectedRow === item.id}
            >
              <TableCell>
                <Name>{item.id}</Name>
              </TableCell>
              <TableCell>
                <Name>{item.name}</Name>
              </TableCell>
              <TableCell>
                <Name>{item.gender}</Name>
              </TableCell>
              <TableCell>
                <Email>{item.email}</Email>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {selectedRow && (
        <div>
          <Name>{exampleList[selectedRow - 1].name}</Name>
          <Email>{exampleList[selectedRow - 1].email}</Email>
        </div>
      )}
    </Container>
  );
}

export default DataDisplay;
