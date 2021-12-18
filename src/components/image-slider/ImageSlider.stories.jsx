// ImageSlider.stories.js|jsx

import ImageSlider from "./ImageSlider";
import imageProduct1 from "../../assets/images/image-product-1.jpg";
import imageProduct2 from "../../assets/images/image-product-2.jpg";
import imageProduct3 from "../../assets/images/image-product-3.jpg";
import imageProduct4 from "../../assets/images/image-product-4.jpg";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Image Slider",
  component: ImageSlider,
};

//👇 We create a “template” of how args map to rendering
let images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];

const Template = (args) => <ImageSlider {...args} />;

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
    images,
  },
};
