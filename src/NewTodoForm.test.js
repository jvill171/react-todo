import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// Smoke test
test('renders without crashing', () => {
  render(<NewTodoForm />);
});

// Snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});