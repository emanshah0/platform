import random
import string
from datetime import datetime, timedelta

class DataFactory:
    def __init__(self):
        self.rows = []
        self.data = {}

    def generate_row(self, id, test_title, date, result):
        return {
            "id": id,
            "Test": test_title,
            "Date": date,
            "Result": result
        }

    def generate_data_entry(self, row_id, content):
        return {
            row_id: {
                "content": content
            }
        }

    def add_row(self, row):
        self.rows.append(row)

    def add_data_entry(self, data_entry):
        self.data.update(data_entry)

    def get_rows_and_data(self):
        return {
            "rows": self.rows,
            "data": self.data
        }

    def generate_table_content(self, rows):
        return {
            "type": "table",
            "data": {"rows": rows}
        }

    def generate_linegraph_content(self, x_data, y_data, title):
        return {
            "type": "linegraph",
            "data": {"xData": x_data, "yData": y_data, "title": title}
        }

    @staticmethod
    def random_date():
        start_date = datetime(2020, 1, 1)
        end_date = datetime.now()
        delta = end_date - start_date
        random_days = random.randrange(delta.days)
        return (start_date + timedelta(days=random_days)).strftime('%Y-%m-%d')

    @staticmethod
    def random_title():
        return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

def generate_test_data(factory, num_entries):
    for i in range(1, num_entries + 1):
        test_title = factory.random_title()
        test_date = factory.random_date()
        test_result = random.choice([True, False])

        row = factory.generate_row(i, test_title, test_date, test_result)
        factory.add_row(row)

        table_content = factory.generate_table_content([row])
        linegraph_content = factory.generate_linegraph_content(
            [random.random() for _ in range(10)],
            [random.random() for _ in range(10)],
            "Datapoint Title"
        )

        data_entry = factory.generate_data_entry(i, [table_content, linegraph_content])
        factory.add_data_entry(data_entry)

    return factory.get_rows_and_data()

