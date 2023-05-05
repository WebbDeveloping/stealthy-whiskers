import RelatdProducts from "./RelatdProducts";

const Component = {
  title: "02-molecules/RelatdProducts",
  component: RelatdProducts,
};

export default Component;

const Template = (args) => <RelatdProducts {...args} />;
export const Default = Template.bind({});
Default.args = {};
