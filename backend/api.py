from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/data')
def get_data():
    mock_data = {
        "serial_number": "ABC123",
        "part_number": "XYZ789",
        "rows": [
            {
                "id": 1,
                "Test": "Temperature Test 1",
                "Date": "2020-01-01",
                "Result": True,
                "content": [
                    {
                        "type": "table",
                        "data": {
                            "rows": [
                                {
                                    "id": 1,
                                    "Test": "Temperature Test 1",
                                    "Date": "2020-01-01",
                                    "Result": True
                                },
                                {
                                    "id": 2,
                                    "Test": "Temperature Test 2",
                                    "Date": "2020-01-10",
                                    "Result": False
                                }
                            ]
                        }
                    },
                    {
                        "type": "linegraph",
                        "data": {
                            "xData": ["2020-01-01", "2020-01-10"],
                            "yData": [72, 68],
                            "title": "Temperature Data"
                        }
                    }
                ]
            }
        ]
    }
    
    return jsonify(mock_data["rows"])

if __name__ == '__main__':
    app.run(debug=True)
