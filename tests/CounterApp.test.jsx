import {fireEvent, render, screen} from "@testing-library/react";
import {CounterApp} from "../src/CounterApp";

describe("Pruebas en <CounterApp />", () => {
	// Variables globales
	const value = 10;

	test("Debe hacer match con el snapshot", () => {
		const {container} = render(<CounterApp value={value} />);

		expect(container).toMatchSnapshot();
	});

	test("Debe mostar el valor inical de 100", () => {
		render(<CounterApp value={100} />);

		expect(screen.getByText(100)).toBeTruthy();

		expect(screen.getByRole("heading", {level: 2}).innerHTML).toContain("100");
	});

	test("Debe de incrementar con el boton +1", () => {
		render(<CounterApp value={value} />);

		fireEvent.click(screen.getByText("+1"));

		expect(screen.getByText("11")).toBeTruthy();
	});

	test("Debe de decrementar con el boton de -1", () => {
		render(<CounterApp value={value} />);

		fireEvent.click(screen.getByText("-1"));
		// screen.debug()
		expect(screen.getByText("9")).toBeTruthy();
	});

	test("Debe de funcionar el boton de reset", () => {
		render(<CounterApp value={355} />);

		fireEvent.click(screen.getByText("+1"));
		fireEvent.click(screen.getByText("+1"));
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

		expect(screen.getByText(355)).toBeTruthy();

		
	});


});
