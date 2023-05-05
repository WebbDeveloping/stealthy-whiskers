import Contact from "./Contact";

const Component = {
  title: "05-pages/Contact",
  component: Contact,
};

export default Component;

const Template = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {};
