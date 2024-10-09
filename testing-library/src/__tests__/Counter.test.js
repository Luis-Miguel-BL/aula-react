import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

// Testando se o componente é renderizado corretamente
test('renders counter component', () => {
  render(<Counter />);
  const counterValue = screen.getByTestId('counter-value');
  const incrementButton = screen.getByTestId('increment-btn');
  const decrementButton = screen.getByTestId('decrement-btn');

  // Verifica se os elementos estão no documento
  expect(counterValue).toBeInTheDocument();
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();

  // Verifica se o valor inicial do contador é 0
  expect(counterValue.textContent).toBe('0');
});

// Testando o incremento
test('increments counter value', () => {
  render(<Counter />);
  const counterValue = screen.getByTestId('counter-value');
  const incrementButton = screen.getByTestId('increment-btn');

  // Simula um clique no botão de incrementar
  fireEvent.click(incrementButton);

  // Verifica se o valor foi incrementado corretamente
  expect(counterValue.textContent).toBe('1');
});

// Testando o decremento
test('decrements counter value', () => {
  render(<Counter />);
  const counterValue = screen.getByTestId('counter-value');
  const decrementButton = screen.getByTestId('decrement-btn');

  // Simula um clique no botão de decrementar
  fireEvent.click(decrementButton);

  // Verifica se o valor foi decrementado corretamente
  expect(counterValue.textContent).toBe('-1');
});
