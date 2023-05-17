import Modal from 'react-modal';

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
        <img src={largeImageURL} alt={tags} width="640" />
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};
