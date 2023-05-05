import CategoryPage from "./CategoryPage";

const Component = {
  title: "05-pages/CategoryPage",
  component: CategoryPage,
};

export default Component;

const Template = (args) => <CategoryPage {...args} />;
export const Default = Template.bind({});
Default.args = {};
