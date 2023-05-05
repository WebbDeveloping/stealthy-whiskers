import About from "./AboutPage";

const Component = {
  title: "05-pages/About",
  component: About,
};

export default Component;

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {};
