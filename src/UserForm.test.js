import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("renders user form component", () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it call onAddUser when the form is submitted", async () => {
  const mock = jest.fn();
  render(<UserForm onAddUser={mock} />);
  const inputName = screen.getByRole("textbox", { name: /name/i });
  const inputEmail = screen.getByRole("textbox", { name: /email/i });

  await user.click(inputName);
  await user.keyboard("test");

  await user.click(inputEmail);
  await user.keyboard("test@test.com");

  const button = screen.getByRole("button");
  await user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "test", email: "test@test.com" });
});
