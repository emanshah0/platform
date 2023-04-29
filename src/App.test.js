import { render, screen } from "@testing-library/react";
import App from "./App";
import Popup from "./components/popup";
import LineGraph from "./components/lineGraph";

// TEST CASE APP COMPONENT
test("renders App component", () => {
  render(<App />);
});

// TEST CASE POP UP COMPONENT
describe("Popup component", () => {
  it("renders with the provided content when isOpen is true", () => {
    render(
      <Popup isOpen={true} togglePopup={() => {}}>
        <div>Hello World</div>
      </Popup>
    );
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Popup isOpen={false} togglePopup={() => {}}>
        <div>Hello World</div>
      </Popup>
    );
    expect(screen.queryByText("Hello World")).toBeNull();
  });
});

// TEST CASE FOR LINE GRAPH COMPONENT
describe("LineGraph", () => {
  it("renders the Line Graph title", () => {
    const xData = [1, 2, 3, 4, 5];
    const yData = [2, 3, 5, 4, 7];
    render(<LineGraph xData={xData} yData={yData} />);
    const title = screen.getByText(/Line Graph/);
    expect(title).toBeInTheDocument();
  });
});
