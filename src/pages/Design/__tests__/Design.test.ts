import { design_images } from "../Design";

test("Check imageArray for string elements ending with .webp", () => {
  // Check if imageArray exists
  expect(design_images).toBeDefined();

  // Check if all elements in imageArray are strings that end with ".webp"
  design_images.forEach((element: string) => {
    expect(typeof element).toBe("string");
    expect(element.endsWith(".webp")).toBe(true);
  });
});
