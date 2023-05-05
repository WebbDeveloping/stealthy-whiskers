import ProductPage from "./ProductPage";

const Component = {
  title: "05-pages/Product",
  component: ProductPage,
};

export default Component;

const Template = (args) => <ProductPage {...args} />;
export const Default = Template.bind({});
Default.args = {};
