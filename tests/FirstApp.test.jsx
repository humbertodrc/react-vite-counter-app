import {render} from "@testing-library/react";
import {FirstApp} from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
	const title = "Hola soy un Titulo";
	const subTitle = "Hola soy un subtitulo";

	// test('Debe hacer match con el snapshot', () => {

	//   const {container} = render(<FirstApp title={title} />);

	//   expect(container).toMatchSnapshot();

	// })

	test("Debe mostar el titulo en un h1", () => {
		const {getByText, getByTestId} = render(<FirstApp title={title} />);

		expect(getByText(title)).toBeTruthy();

		// Buscar si existe un h1 con JS
		// const h1 = container.querySelector('h1');
		// expect(h1.innerHTML).toContain(title);

		expect(getByTestId("test-title")).toBeTruthy();
		expect(getByTestId("test-title").innerHTML).toBe(title);
		expect(getByTestId("test-title").innerHTML).toContain(title);
	});

	test("Debe mostar el subtitulo enviado por props", () => {
		const {getAllByText} = render(<FirstApp title={title} subTitle={subTitle} />);

    expect(getAllByText(subTitle).length).toBe(2);
	});
});
