const rows = [
  {
    id: 1,
    Category: "Temperature",
    Subcategories: 3,
  },
  {
    id: 2,
    Category: "Humidity",
    Subcategories: 2,
  },
  {
    id: 3,
    Category: "Pressure",
    Subcategories: 1,
  },
];

const mockData = {
  1: {
    content: [
      {
        type: "table",
        data: {
          rows: [
            {
              id: 1,
              Test: "Temperature Test 1",
              Date: "2020-01-01",
              Result: true,
            },
            {
              id: 2,
              Test: "Temperature Test 2",
              Date: "2020-01-10",
              Result: false,
            },
            {
              id: 3,
              Test: "Temperature Test 3",
              Date: "2020-01-10",
              Result: false,
            },
          ],
        },
      },
      {
        type: "linegraph",
        data: {
          xData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          yData: [10, 20, 30, 40, 50, 60],
          title: "Product Sales",
          lineStyle: {
            stroke: "blue",
            strokeWidth: 3,
            strokeDasharray: "5,5",
          },
        },
      },
      {
        type: "linegraph",
        data: {
          xData: [
            "2020-01-01",
            "2020-01-02",
            "2020-01-03",
            "2020-01-04",
            "2020-01-05",
            "2020-01-06",
            "2020-01-07",
            "2020-01-08",
            "2020-01-09",
            "2020-01-10",
          ],
          yData: [72, 71, 70, 68, 69, 73, 74, 76, 75, 72],
          title: "Temperature Data",
        },
      },
    ],
  },
  2: {
    content: [
      {
        type: "table",
        data: {
          rows: [
            {
              id: 1,
              Test: "Humidity Test 1",
              Date: "2020-02-15",
              Result: true,
            },
            {
              id: 2,
              Test: "Humidity Test 2",
              Date: "2020-02-25",
              Result: true,
            },
          ],
        },
      },
      {
        type: "linegraph",
        data: {
          xData: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          yData: [10, 20, 30, 40, 50, 60],
          title: "Sales Report",
          showDataPoints: true,
          dataPointRadius: 4,
          dataPointColor: "green",
          showLabels: true,
        },
      },
      {
        type: "linegraph",
        data: {
          xData: ["2020-02-15", "2020-02-25"],
          yData: [45, 55],
          title: "Humidity Data",
        },
      },
      {
        type: "linegraph",
        data: {
          xData: ["2020-02-15", "2020-02-20", "2020-02-25"],
          yData: [45, 50, 55],
          title: "Humidity Data Detailed",
        },
      },
    ],
  },
  3: {
    content: [
      {
        type: "table",
        data: {
          rows: [
            {
              id: 1,
              Test: "Pressure Test 1",
              Date: "2020-03-05",
              Result: false,
            },
          ],
        },
      },
      {
        type: "linegraph",
        data: {
          xData: ["2020-03-05", "2020-03-05", "2020-03-05", "2020-03-05"],
          yData: [1013, 2000, 2500, 1200],
          title: "Pressure Data",
        },
      },
      {
        type: "linegraph",
        data: {
          xData: ["2020-03-05"],
          yData: [1013],
          title: "Pressure Data Simplified",
        },
      },
      {
        type: "linegraph",
        data: {
          xData: [
            "2020-03-01",
            "2020-03-02",
            "2020-03-03",
            "2020-03-04",
            "2020-03-05",
          ],
          yData: [1000, 1010, 1020, 1030, 1013],
          title: "Pressure Data Over Time",
        },
      },
    ],
  },
};

export { rows, mockData };

// DATA TEMPLATE
// // Row template
// {
//   id: 1,
//   Test: "Temperature Test 1",
//   Date: "2020-01-01",
//   Result: true,
// }

// // Mock data template
// {
//   1: {
//     content: [
//       {
//         type: "table",
//         data: {
//           rows: [ /* insert rows here */ ]
//         }
//       },
//       {
//         type: "linegraph",
//         data: {
//           xData: [ /* insert x data here */ ],
//           yData: [ /* insert y data here */ ],
//           title: "Title"
//         }
//       },
//       // add more types of data as necessary
//     ]
//   },
//   // add more data entries as necessary
// }
