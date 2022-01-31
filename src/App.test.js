import { render, screen } from "@testing-library/react";
import App from "./App";

test("app runs", () => {
  render(<App />);
  expect(screen).toBeTruthy();
});
