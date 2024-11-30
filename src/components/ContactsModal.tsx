import { Link, Modal } from "@canonical/react-components";

export const ContactsModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const closeHandler = () => setModalOpen(false);
  return (
    <>
      {modalOpen ? (
        <Modal close={closeHandler} title="Contact Me">
          <ul>
            <li>
              Email:
              <Link href="mailto:hazemabdoabdrbo@gmail.com">
                hazemabdoabdrbo@gmail.com
              </Link>
            </li>
            <li>
              Phone: <Link href="tel:+201023353532">(+20) 01023353532</Link>
            </li>
            <li>
              GitHub:
              <Link
                href="https://github.com/HazemAbdo"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/HazemAbdo
              </Link>
            </li>
            <li>
              LinkedIn:
              <Link
                href="https://www.linkedin.com/in/hazemabdo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/hazemabdo/
              </Link>
            </li>
          </ul>
        </Modal>
      ) : null}
    </>
  );
};
