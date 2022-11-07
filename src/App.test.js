import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has the correct intial color", () => {
  render(<App />);
  //find an element with role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //click button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe("Change to red");
});

test("intial condition", () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", { name: "Disable The Button" });
  expect(checkbox).not.toBeChecked();
});

test("checkbox functionality", () => {
  render(<App />);

  // when checkbox is checked, button should be disabled
  const checkbox = screen.getByRole("checkbox", { name: "Disable The Button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
