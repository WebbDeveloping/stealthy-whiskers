import FollowImage from "./FollowImage";

const Component = {
  title: "01-atoms/FollowImage",
  component: FollowImage,
};

export default Component;

const Template = (args) => <FollowImage {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
