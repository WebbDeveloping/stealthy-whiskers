import InnerHero from "./InnerHero";

const Component = {
  title: "02-molecules/InnerHero",
  component: InnerHero,
};

export default Component;

const Template = (args) => <InnerHero {...args} />;

export const Default = Template.bind({});
