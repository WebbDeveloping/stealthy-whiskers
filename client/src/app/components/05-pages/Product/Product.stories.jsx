import Product from "./Product";

const Component = {
  title: "05-pages/Product",
  component: Product,
};

export default Component;

const Template = (args) => <Product {...args} />;
export const Default = Template.bind({});
Default.args = {};
