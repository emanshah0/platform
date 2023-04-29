import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./popup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  border-radius: 10px;
  min-width: 300px;
  max-width: 600px;
  margin: 1 0px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
  row-gap: 2px;
`;

const TableHeader = styled.th`
  background-color: #09ff0052;
  text-align: left;
  padding: 10px;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

const TableCell = styled.td`
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FieldCell = styled.div`
  font-size: 16px;
`;

function TableDisplay() {
  var exampleList = [
    {
      id: 1,
      Test: "PARAMETER 1",
      Value: "[Some Value]",
      Result: true,
    },
    {
      id: 2,
      Test: "PARAMETER 2",
      Value: "[Some Value]",
      Result: false,
    },
    {
      id: 3,
      Test: "PARAMETER 3",
      Value: "[Some Value]",
      Result: false,
    },
    {
      id: 4,
      Test: "PARAMETER 4",
      Value: "[Some Value]",
      Result: true,
    },
    {
      id: 5,
      Test: "PARAMETER 5",
      Value: "[Some Value]",
      Result: true,
    },
  ];
  const fields = Object.keys(exampleList[0]).filter((field) => field !== "id");

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (id) => {
    setSelectedRow(id);
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {fields.map((field) => (
              <TableHeader key={field}>{field.toUpperCase()}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {exampleList.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              selected={selectedRow === item.id}
            >
              {fields.map((field) => (
                <TableCell key={`${item.id}-${field}`}>
                  {field === "Result" ? (
                    <FieldCell style={{ color: item[field] ? "green" : "red" }}>
                      {item[field].toString().toUpperCase()}
                    </FieldCell>
                  ) : (
                    <FieldCell>{item[field]}</FieldCell>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableDisplay;
