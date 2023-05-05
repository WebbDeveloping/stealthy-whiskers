import ShopHero from "./ShopHero";

const Component = {
  title: "02-molecules/ShopHero",
  component: ShopHero,
};

export default Component;

const Template = (args) => <ShopHero {...args} />;
export const Default = Template.bind({});

Default.args = {};
