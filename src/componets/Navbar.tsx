import { Navigation } from "@canonical/react-components";

const Navbar = () => {
  return (
    <Navigation
      items={[
        {
          label: "About Me",
          url: "#about",
        },
        {
          label: "Background",
          url: "#background",
        },
        {
          label: "Experience",
          url: "#experience",
        },
        {
          label: "Projects",
          url: "#projects",
        },
      ]}
      logo={{
        src: "src/assets/logo.svg",
        title: "Hazem Abdo",
        url: "#",
      }}
    />
  );
};

export default Navbar;
