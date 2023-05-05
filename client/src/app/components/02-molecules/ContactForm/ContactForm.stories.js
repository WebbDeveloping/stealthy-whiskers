import ContactForm from "./ContactForm";

const Component = {
  title: "02-Molecules/ContactForm",
  component: ContactForm,
};

const Template = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default Component;
