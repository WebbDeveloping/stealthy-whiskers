import HeroBgImage from "./HeroBgImage";

const Component = {
  title: "02-molecules/HeroBgImage",
  component: HeroBgImage,
};

export default Component;

const Template = (args) => <HeroBgImage {...args} />;
export const Default = Template.bind({});

Default.args = {};
