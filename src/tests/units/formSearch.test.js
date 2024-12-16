import FormSearch from "@/components/FormSearch";
import MoviesProvider from "@/context/MoviesContext";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
const mockPush = jest.fn();
describe("Prueba de formulario de busquedas de peliculas", () => {
  it("Prueba de formulario", async () => {
    const useRouter = require("next/navigation").useRouter;
    useRouter.mockReturnValue({
      push: mockPush,
    });

    render(
      <MoviesProvider>
        <FormSearch />
      </MoviesProvider>
    );

    const input = screen.getByTestId("input");
    await userEvent.type(input, "avatar");
    expect(input).toHaveValue("avatar");
  });
});
