import { render, screen, fireEvent } from "@testing-library/react";
import ImageSlider from "./ImageSlider";
import image1 from "../../assets/images/image-product-1.jpg";
import image2 from "../../assets/images/image-product-2.jpg";
import image3 from "../../assets/images/image-product-3.jpg";
import image4 from "../../assets/images/image-product-4.jpg";
import { configure } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

configure({ testIdAttribute: "id" });

describe("image slider tests", () => {
  const images = [image1, image2, image3, image4];
  it("next button", async () => {
    render(<ImageSlider images={images} />);
    const slider = screen.getByTestId("slider");
    const nextButton = screen.getByTestId("next-button");
    const originalNextImage = screen.getByAltText("product image 1");
    expect(originalNextImage).toBeVisible();
    userEvent.click(screen.getByTestId("next-button"));
    fireEvent.animationEnd(slider);
    const nextImage = await screen.findByAltText("product image 2");
    expect(nextImage).toBeVisible();
    expect(nextButton).toBeInTheDocument();
    userEvent.click(screen.getByTestId("next-button"));
    fireEvent.animationEnd(slider);
    userEvent.click(screen.getByTestId("next-button"));
    fireEvent.animationEnd(slider);
    const firstImage = await screen.findByAltText("product image 0");
    expect(firstImage).toBeVisible();
  });
});
