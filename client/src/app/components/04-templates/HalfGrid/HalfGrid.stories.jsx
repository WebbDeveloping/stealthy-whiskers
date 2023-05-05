import HalfGrid from "./HalfGrid";

const Component = {
  title: "04-templates/HalfGrid",
  component: HalfGrid,
};

export default Component;

const Template = (args) => <HalfGrid {...args} />;
export const Default = Template.bind({});

Default.args = {};
