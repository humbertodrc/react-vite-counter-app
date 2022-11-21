import {render, screen} from "@testing-library/react";
import {FirstApp} from "../src/FirstApp";

describe("Pruebas en <FirstApp /> dos", () => {
	const title = "Hola soy un Titulo";
	const subTitle = "Hola soy un subtitulo";

	test("Debe de hacer match con el snapshot", () => {
		const {container} = render(<FirstApp title={title} />);

		expect(container).toMatchSnapshot();
	});

	test('Debe mostar el mensaje "Hola soy un Titulo"', () => {
		render(<FirstApp title={title} />);
		// screen.debug()
		expect(screen.getByText(title)).toBeTruthy();
	});

	test('Debe mostrar el titulo en un h1', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByRole('heading', {leve: 1 }).innerHTML).toContain(title)
	})

	test('Debe mostart el subtitulo enviado por props', () => {
		render(<FirstApp title={title} subTitle={subTitle} />);

		expect(screen.getAllByText(subTitle).length).toBe(2)
	})
});
