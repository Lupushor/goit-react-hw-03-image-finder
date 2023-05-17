import { ModalImg } from 'components/modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, ListItem } from './ImageGalleryItem.styled';

// export const ImageGalleryItem = ({ largeImageURL, tags, webformatURL }) => {
//   return (
//     <li class="gallery-item">
//       <img src={webformatURL} alt={tags} />
//       <Modal largeImageURL={largeImageURL} />
//     </li>
//   );
// };

export class ImageGalleryItem extends Component {
  state = {
    selectedImg: null,
  };

  setSelectedImg = () => {
    this.setState({ selectedImg: this.props.largeImageURL });
  };

  closeModal = () => {
    this.setState({ selectedImg: null });
  };

  render() {
    const { selectedImg } = this.state;
    const { largeImageURL, tags, webformatURL } = this.props;
    return (
      <ListItem class="gallery-item">
        <Image src={webformatURL} alt={tags} onClick={this.setSelectedImg} />
        <ModalImg
          isOpen={selectedImg !== null}
          onClose={this.closeModal}
          largeImageURL={largeImageURL}
        />
      </ListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
