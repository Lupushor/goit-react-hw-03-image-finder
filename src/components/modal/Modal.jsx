import Modal from 'react-modal';
import { ButtonModal, ImgModal } from './Modal.style';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalImg = ({ largeImageURL, tags, onClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <ImgModal src={largeImageURL} alt={tags} />
        <ButtonModal onClick={onClose}>Close</ButtonModal>
      </div>
    </Modal>
  );
};
