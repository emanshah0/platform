import { render, screen } from '@testing-library/react';
import App from './App';
import Popup from './components/popup';

// write test for App component
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});


// write test for Popup component
test("Popup renders", () => {
  render(<Popup content={<div>hello</div>} />);
  const popupElement = screen.getByText(/hello/i);
  expect(popupElement).toBeInTheDocument();
});
