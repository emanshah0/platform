from flask import Flask, jsonify
from flask_cors import CORS
from bench import DataFactory, generate_test_data

app = Flask(__name__)
CORS(app)


@app.route('/data')
def get_data():
    rows = [
        {
            'id': 1,
            'Test': 'Temperature',
            'Date': "2020-10-10",
            'Result': True
        },
    ]

    data = {
        1: {
            'content': [
                {
                    'type': 'table',
                    'data': {
                        'rows': [
                            {
                                'id': 1,
                                'Test': 'Temperature Test 1',
                                'Date': '2020-01-01',
                                'Result': True
                            }
                        ]
                    }
                },
                {
                    "type": "linegraph",
                    "data": {
                        "xData": [
                            "2020-03-01",
                            "2020-03-02",
                            "2020-03-03",
                            "2020-03-04",
                            "2020-03-05",
                        ],
                        "yData": [1000, 1010, 1020, 1030, 1013],
                        "title": "Pressure Data Over Time",
                    },
                },
            ]
        }
    }
    packet = {'rows': rows, 'data': data,
              'serial_number': '123456789', 'part_number': '123456789'}
    return jsonify(packet)


@app.route('/api/data', methods=['GET'])
def get_api():
    data_factory = DataFactory()
    test_data = generate_test_data(data_factory, 10)
    return jsonify(test_data)


if __name__ == '__main__':
    app.run(debug=True)
    