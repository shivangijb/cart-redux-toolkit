import { render, screen } from '@testing-library/react';
import App from './App';
import Products from './components/Products';

test('renders products', () => {
  render(<Products />);
  const linkElement = screen.getAllByRole("heading");
  expect(linkElement).toBeInTheDocument();
});
