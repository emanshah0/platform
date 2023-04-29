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
  max-width: 1200px;
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
const FieldCell = styled.div`
  font-size: 16px;
  padding-bottom: 15px;
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

function ViewTable() {
  var exampleList = [
    {
      id: 1,
      Test: "Initial AT",
      Date: "2019-12-04",
      Result: true,
    },
    {
      id: 2,
      Test: "Final AT",
      Date: "2019-12-04",
      Result: false,
    },
    {
      id: 3,
      Test: "Initial CNS",
      Date: "2019-12-04",
      Result: false,
    },
    {
      id: 4,
      Test: "CNS",
      Date: "2019-12-04",
      Result: true,
    },
    {
      id: 5,
      Test: "BS",
      Date: "2019-12-04",
      Result: true,
    },
  ];
  const fields = Object.keys(exampleList[0]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [serialNumber, setSerialNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const xData = [];
  const yData = [];
  for (let i = 0; i <= 360 * 2; i += 10) {
    xData.push(i);
    yData.push(Math.sin((i * Math.PI) / 180));
  }

  const handleSerialNumberSubmit = () => {
    setSerialNumber(document.getElementById("serial-number-input").value);
    setIsSubmitted(true);
  };

  const handleRowClick = (id) => {
    setSelectedRow(id);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Container>
      <Header>
        <Title>Serial Number: </Title>
        <SerialNumberInput
          id="serial-number-input"
          type="text"
          defaultValue={serialNumber}
        />
        <SubmitButton onClick={handleSerialNumberSubmit}>Submit</SubmitButton>
        {isSubmitted && (
          <SerialNumberDisplay>{serialNumber}</SerialNumberDisplay>
        )}
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
          {exampleList.map((item) => (
            <TableRow
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              selected={selectedRow === item.id}
            >
              {fields.map((field) => (
                <TableCell key={`${item.id}-${field}`}>
                  {field === "Result" ? (
                    <Title style={{ color: item[field] ? "green" : "red" }}>
                      {item[field].toString().toUpperCase()}
                    </Title>
                  ) : (
                    <Title>{item[field]}</Title>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
      {showPopup && (
        <Popup isOpen={showPopup} togglePopup={closePopup}>
          <Title>{exampleList[selectedRow - 1].Test}</Title>
          <FieldCell>{exampleList[selectedRow - 1].Date}</FieldCell>
          <FieldCell>
            {exampleList[selectedRow - 1].Result.toString().toUpperCase()}
          </FieldCell>
          <FieldCell>{<TableDisplay />}</FieldCell>
          <FieldCell>
            <LineGraph xData={xData} yData={yData} />
          </FieldCell>
        </Popup>
      )}
    </Container>
  );
}

export default ViewTable;
