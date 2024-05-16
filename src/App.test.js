import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("renders app component", async () => {
  render(<App />);
  const inputName = screen.getByRole("textbox", { name: /name/i });
  const inputEmail = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");
  await user.click(inputName);
  await user.keyboard("abc");

  await user.click(inputEmail);
  await user.keyboard("abc@abc.com");

  await user.click(button);

  // screen.debug(); // show html content in the console - only for viewing purpose

  const name = screen.getByRole("cell", { name: "abc" });
  const email = screen.getByRole("cell", { name: "abc@abc.com" });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
