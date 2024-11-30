import { Navigation } from "@canonical/react-components";
import { Fragment, useState } from "react";
import { ContactsModal } from "./ContactsModal";

export const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <Fragment>
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
          {
            label: "Contacts",
            url: "#contacts",
            onClick: () => {
              setModalOpen(true);
            },
          },
        ]}
        logo={{
          src: "src/assets/logo.svg",
          title: "Hazem Abdo",
          url: "#",
        }}
      />
      <ContactsModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Fragment>
  );
};
