import { fireEvent, render } from '@testing-library/react';
import TodoList from './TodoList';

const addTodo = (todoList, content="Test added Todo") =>{
    const inContent = todoList.getByLabelText("Todo:");
    const btnSubmit = todoList.getByText("Add New Todo");

    fireEvent.change(inContent, { target: { value: content } });
    fireEvent.click(btnSubmit);
}


// Smoke test
test('renders without crashing', () => {
  render(<TodoList />);
});

// Snapshot test
it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", ()=>{
    const todoList = render(<TodoList/>)

    // todolist is empty
    expect(todoList.queryByText("X")).not.toBeInTheDocument();

    addTodo(todoList)
    
    const newTodo = todoList.getByText("Test added Todo");
    expect(newTodo).toBeInTheDocument();
})

it("can remove a todo", ()=>{
    const todoList = render(<TodoList/>)

    // Add and check there is currently a todo
    addTodo(todoList, "One")
    addTodo(todoList, "Two")
    addTodo(todoList, "Three")
    
    let todos = todoList.container.querySelectorAll(".Todo");
    const firstTodo = todoList.getByText("One");

    expect(firstTodo).toBeInTheDocument()
    expect(todos.length).toEqual(3)

    // Remove todo
    const rmBtns = todoList.getAllByText("X")
    fireEvent.click(rmBtns[0])
    todos = todoList.container.querySelectorAll(".Todo");

    expect(firstTodo).not.toBeInTheDocument()
    expect(todos.length).toEqual(2)
})