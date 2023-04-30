import React, { useState } from "react";
import styled from "styled-components";
import Popup from "../components/popup";
import TableDisplay from "../components/table";
import LineGraph from "../components/lineGraph";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.35);
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 1px;
  border-radius: 10px;
  min-width: 400px;
  max-width: 1080px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
  row-gap: 2px;
  border-radius: 10px;
`;

const TableHeader = styled.th`
  background-color: #37df0ede;
  text-align: left;
  padding: 10px;
`;

const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.35);
    border-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  &:active {
    transform: scale(1.01);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.35);
    border-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
`;

// component that will display a cell in the table
const TableCell = styled.td`
  padding: 10px;
`;

// component that will display the title of the table
const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

// component that will display a field in the table
const FieldCell = styled.h2`
  width: 100%;
  font-size: 16px;
  padding-right: 20px;
`;

// component that will display a header above the top  of the table
const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
  row-gap: 2px;
`;

// component that will display serial number submitted on the right side of the header

const SerialNumberDisplay = styled.div`
  margin-bottom: 20px;
  margin-left: auto;
  row-gap: 2px;
  border-radius: 10px;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 1px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  align-self: flex-end;
`;

// component that will take in a serial number as input and display it in the header
const SerialNumberInput = styled.input`
  width: 200px;
  margin-bottom: 20px;
  row-gap: 2px;
  border-radius: 10px;
  padding: 10px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  align-self: flex-start;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.35);
  border-color: white;
  &:focus {
    outline: none;
    border-color: #09ff0052;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }
`;

// button that will be used to submit the serial number
const SubmitButton = styled.button`
  align-self: flex-start;
  margin-right: auto;
  background-color: #37df0ede;
  border-radius: 10px;
  border-width: 0px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.35);
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }
  &:active {
    transform: scale(1.01);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
  }
`;

function ViewTable({ mockData }) {
  const { serial_number, part_number, rows } = mockData;

  const fields = Object.keys(rows[0]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleRowClick = (id) => {
    setSelectedRow(id-1);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      <Header>
        <Title>Serial Number: {serial_number}</Title>
        <Title>Part Number: {part_number}</Title>
      </Header>
      <Table>
        <thead>
          <tr>
            {fields.map((field) => (
              <TableHeader key={field}>{field.toUpperCase()}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => (
            <TableRow key={item.id} onClick={() => handleRowClick(item.id)}>
              {Object.keys(item).map((key) => (
                <TableCell key={`${item.id}-${key}`}>
                  {key === "Result" ? (
                    <Title style={{ color: item[key] ? "green" : "red" }}>
                      {item[key].toString().toUpperCase()}
                    </Title>
                  ) : (
                    <Title>{item[key]}</Title>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
      {showPopup && (
        <Popup isOpen={showPopup} togglePopup={closePopup}>
          {rows[selectedRow - 1]?.content.map((item, index) => {
            if (item.type === "linegraph") {
              return (
                <LineGraph
                  key={index}
                  xData={item.data.xData}
                  yData={item.data.yData}
                  title={item.data.title}
                />
              );
            } else if (item.type === "table") {
              return <TableDisplay key={index} content={item} />;
            } else {
              return null;
            }
          })}
        </Popup>
      )}
    </Container>
  );
}
export default ViewTable;
