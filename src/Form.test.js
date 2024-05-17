import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("find role of email and search", () => {
  console.clear();
  render(<Form />);
  const email = screen.getByRole("textbox", { name: /email/i });
  const search = screen.getByRole("textbox", { name: /search/i });

  expect(email).toBeInTheDocument();
  expect(search).toBeInTheDocument();

  const submitBtn = screen.getByRole("button", { name: /submit/i });
  const cancelBtn = screen.getByRole("button", { name: /cancel/i });

  expect(submitBtn).toBeInTheDocument();
  expect(cancelBtn).toBeInTheDocument();

  const signinBtn = screen.getByRole("button", { name: /sign in/i });
  const signoutBtn = screen.getByRole("button", { name: /sign out/i });

  expect(signinBtn).toBeInTheDocument();
  expect(signoutBtn).toBeInTheDocument();
});
