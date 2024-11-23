import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test ("displays a top level heading with the text `Hi, I'm _______`",() => {
    render(<App />);

    const topLevelHeading = screen.getByRole("heading", {
        name:/hi, i'm/i,
        exact: false,
        level: 1,
    })

    expect (topLevelHeading).toBeInTheDocument()
})
test ("displays an image with an alt tex describing the content of the image ", () => {
    render(<App />);

    const image = screen.getByRole("img", {

    })

    expect (image).toBeInTheDocument();
    expect (image).toHaveAttribute ("alt", "my image");
})
test ("displays a second level heading with the text `About Me`", () => {
    render(<App />);

    const secondLevelHeading = screen.getByRole("heading", {
        name:/about me/i,
        exact: false,
        level: 2,
    })

    expect (secondLevelHeading).toBeInTheDocument()
})
test("displays a link to github page", () => {
    render (<App />);
    const githubLink = screen.getByRole("link", {
        name:/github/i,
        exact: true,
    })
    expect(githubLink).toBeInTheDocument();
})
test("displays a link to linkedin page", () => {
    render (<App />);
    const linkedinLink = screen.getByRole("link", {
        name:/linkedin/i,
        exact: true,
    })
    expect(linkedinLink).toBeInTheDocument();
})