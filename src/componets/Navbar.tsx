import { Navigation } from "@canonical/react-components";

const Navbar = () => {
  return (
    <Navigation
      items={[
        {
          label: "About Me",
          url: "#about-me",
        },
        {
          label: "Projects",
          url: "#projects",
        },
        {
          label: "Contact",
          url: "#contact",
        },
      ]}
      logo={{
        src: "https://assets.ubuntu.com/v1/82818827-CoF_white.svg",
        title: "Hazem Abdo",
        url: "#",
      }}
    />
  );
};

export default Navbar;
