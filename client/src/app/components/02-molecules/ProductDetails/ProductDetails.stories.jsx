import ProductDetails from "./ProductDetails";

const Component = {
  title: "02-molecules/ProductDetails",
  component: ProductDetails,
};

export default Component;

const Template = (args) => <ProductDetails {...args} />;

export const Default = Template.bind({});
Default.args = {};
