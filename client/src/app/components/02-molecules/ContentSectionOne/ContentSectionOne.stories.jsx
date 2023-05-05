import ContentSectionOne from "./ContentSectionOne";

const Component = {
  title: "02-molecules/ContentSectionOne",
  component: ContentSectionOne,
};

export default Component;

const Template = (args) => <ContentSectionOne {...args} />;

export const Default = Template.bind({});
