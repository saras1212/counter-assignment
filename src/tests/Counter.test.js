// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';

// import the Counter component here
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);

})

test('renders counter message', () => {
  const counterMessage = screen.getByText('Counter'); 
  expect(counterMessage).toBeInTheDocument();


});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count'); 
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const increment = screen.getByText('+');
  const countDisplay = screen.getByTestId('count');
  
  fireEvent.click(increment);
  expect(countDisplay).toHaveTextContent('1');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByText('-');
  const countDisplay = screen.getByTestId('count');
  
  fireEvent.click(decrement);
  expect(countDisplay).toHaveTextContent('-1');

});
