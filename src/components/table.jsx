import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./popup";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  border-radius: 10px;
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
function TableDisplay({ content }) {
  const [selectedRow, setSelectedRow] = useState(null);

  if (!content || content.type !== "table" || content.data.rows.length === 0) {
    return <div>No data available</div>;
  }

  const tableData = content.data.rows;
  const fields = Object.keys(tableData[0]).filter((field) => field !== "id");

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
          {tableData.map((item) => (
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
