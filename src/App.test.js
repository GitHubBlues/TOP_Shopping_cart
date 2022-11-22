import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { unmountComponentAtNode } from "react-dom";
import App from './App';
import Quantity from "./Components/setItemQuantity.js"

let container = null;
beforeEach( () => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach( () => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


describe("Step 1: Find elements in page", () => {
  test('renders shop name in landing-page header', () => {
    render(<App />);
    const element = screen.getByText("The little pilot");
    expect(element).toBeInTheDocument();
  });

  test('renders "go to shop" button in landing page ', () => {
    render(<App />);
    const element = screen.getByRole('button', { name: "Go to shop" });
    expect(element).toBeInTheDocument();
  })
});


describe("Step 2: Test page redirection", () => {
  test("go to shop page from home page using header button", () =>{
    render(<App />);
    expect( screen.queryByText('Toys, puzzles, costumes, books and much more') ).toBeInTheDocument();
    expect( screen.queryByAltText("Airport coloring book") ).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link', { name: "Shop" }));
    expect( screen.queryByText('Toys, puzzles, costumes, books and much more') ).not.toBeInTheDocument();
    expect( screen.queryByAltText("Airport coloring book") ).toBeInTheDocument();
  });

  test("go to contact page from product page", () =>{
    render(<App />);
    expect( screen.queryByText('304 East Park Avenue, Greenborough, Ireland') ).not.toBeInTheDocument();
    expect( screen.queryByAltText("Airport coloring book") ).toBeInTheDocument();
    userEvent.click(screen.getByRole('link', { name: "Contact" }));
    expect( screen.queryByText('304 East Park Avenue, Greenborough, Ireland') ).toBeInTheDocument();
    expect( screen.queryByAltText("Airport coloring book") ).not.toBeInTheDocument();
  });

  test("go to home page from contact page", () =>{
    render(<App />);
    expect( screen.queryByText('Toys, puzzles, costumes, books and much more') ).not.toBeInTheDocument();
    expect( screen.queryByText('304 East Park Avenue, Greenborough, Ireland') ).toBeInTheDocument();
    userEvent.click(screen.getByRole('link', { name: "Home" }));
    expect( screen.getByText('Toys, puzzles, costumes, books and much more') ).toBeInTheDocument();
    expect( screen.queryByText('304 East Park Avenue, Greenborough, Ireland') ).not.toBeInTheDocument();
  });

  test("go to product page from home page - Main Button", () =>{
    render(<App />)
    expect( screen.getByText('Toys, puzzles, costumes, books and much more') ).toBeInTheDocument();
    expect( screen.queryByAltText("Airport coloring book") ).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link', { name: "Go to shop" } ));
    expect( screen.queryByText('Toys, puzzles, costumes, books and much more') ).not.toBeInTheDocument();
    expect( screen.queryByAltText("Airport coloring book") ).toBeInTheDocument();
  });

  test("from product page go to checkout", () =>{
    render(<App />);
    expect( screen.queryByAltText("Airport coloring book") ).toBeInTheDocument();
    expect( screen.queryByAltText("Checkout") ).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link', { name: "Cart" }));
    expect( screen.queryByAltText("Airport coloring book") ).not.toBeInTheDocument();
    expect( screen.queryByText("CHECKOUT") ).toBeInTheDocument();
    expect( screen.queryByText('Toys, puzzles, costumes, books and much more') ).not.toBeInTheDocument();
    expect( screen.queryByText('304 East Park Avenue, Greenborough, Ireland') ).not.toBeInTheDocument();
    expect( screen.queryByText('The little pilot') ).toBeInTheDocument();
  });
});


describe("Step 3a: Unit test for 'change quantity' function", () =>{
  test.skip("Number of items in bubble", () =>{
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: "Shop" }));
    expect( screen.queryByText("Airport coloring book") ).toBeInTheDocument();
  });

  test("Number of items in checkout page", () =>{
    const mockSetQ = jest.fn();
    const mockSetN = jest.fn();
    const quantity = new Array(19).fill(0); 
    render(<Quantity _quantity={ quantity } _setQuantity={ mockSetQ } _setNtotal={ mockSetN } _itemId ={4}/>)
    expect( screen.queryByText("+") ).toBeInTheDocument();
    fireEvent.click(screen.queryByText('+')); 
    expect(mockSetQ).toHaveBeenCalled();
    expect(mockSetN).toHaveBeenCalled();
  });
});


describe.skip("Step 3b: Unit test for 'get price for each item' function", () =>{

});


describe.skip("Step 3c: Unit test for 'get total price' function", () =>{

});


describe.skip("Step 4: Test styled components", () =>{

});


describe.skip("Step 5: Integration test", () =>{

});


describe.skip("Step 6: Snapshot test", () =>{

});