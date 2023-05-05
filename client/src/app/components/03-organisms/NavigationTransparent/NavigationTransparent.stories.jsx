import NavigationTransparent from "./NavigationTransparent";

const Component = {
  title: "03-organisms/NavigationTransparent",
  component: NavigationTransparent,
};

export default Component;

const Template = (args) => <NavigationTransparent {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Catalog",
      link: "/catalog",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ],
};
