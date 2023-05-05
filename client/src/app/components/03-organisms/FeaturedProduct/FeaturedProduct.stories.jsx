import FeaturedProducts from "./FeaturedProducts";
import { products } from "../../../TestData/products";

const Component = {
  title: "03-organisms/FeaturedProducts",
  component: FeaturedProducts,
};

export default Component;

const Template = (args) => <FeaturedProducts {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: products,
};
