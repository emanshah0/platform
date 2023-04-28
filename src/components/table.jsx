import React, { useState } from "react";
import styled from "styled-components";
import Popup from "./popup";

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
  row-gap: 2px;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0, 0.35);
  border-color: rgba(0,0,0, 0.3);
  border-width: 1px;
  border-radius: 10px;
  
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
    box-shadow: 0px 0px 5px 2px rgba(0,0,0, 0.35);
    border-color: rgba(0,0,0, 0.3);
    border-width: 1px;
    border-radius: 10px;
  }
  &:active {
    transform: scale(1.01);
    box-shadow: 0px 0px 5px 2px rgba(0,0,0, 0.35);
    border-color: rgba(0,0,0, 0.3);
    border-width: 1px;
    border-radius: 10px;  
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

const Result = styled.p`
  font-size: 16px;
`;

function TableDisplay() {
    var exampleList = [
      {
        id: 1,
        Test: "Initial AT",
        Date: "m",
        Result: true,
      },
      {
        id: 2,
        Test: "Final AT",
        Date: "m",
        Result: false,
      },
      {
        id: 3,
        Test: "Initial CNS",
        Date: "m",
        Result: false,
      },
      {
        id: 4,
        Test: "CNS",
        Date: "m",
        Result: true,
      },
      {
        id: 5,
        Test: "BS",
        Date: "m",
        Result: true,
      },
    ];
    const fields = Object.keys(exampleList[0]);
  
    const [selectedRow, setSelectedRow] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
  
    const handleRowClick = (id) => {
      setSelectedRow(id);
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
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
                    <Title>{item[field]}</Title>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>
        {showPopup && (
            <Popup isOpen={showPopup} togglePopup={closePopup}>
                <Title>{exampleList[selectedRow - 1].Test}</Title>
                <Result>{exampleList[selectedRow - 1].Result}</Result>  
            </Popup>
        )}
      </Container>
    );
  }
  
  export default TableDisplay;
  