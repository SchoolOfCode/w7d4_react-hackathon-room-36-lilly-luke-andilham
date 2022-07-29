import { render, screen } from "@testing-library/react";
import App from "./App";

describe("app render test", () => {
	it("renders app correctly", () => {
		render(<App />);
		screen.debug();
	});
});
