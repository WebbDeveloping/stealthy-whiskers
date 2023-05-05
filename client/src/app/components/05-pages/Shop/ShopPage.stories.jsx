import Shop from "./ShopPage";

const Component = {
  title: "05-pages/Shop",
  component: Shop,
};

export default Component;

const Template = (args) => <Shop {...args} />;
export const Default = Template.bind({});

Default.args = {};
