import { render } from '@testing-library/react';
import Todo from './Todo';

// Smoke test
test('renders without crashing', () => {
  render(<Todo />);
});

// Snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});