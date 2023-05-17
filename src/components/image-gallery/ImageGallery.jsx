import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageList class="gallery">
      {images.map(({ id, largeImageURL, tags, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          tags={tags}
          webformatURL={webformatURL}
        />
      ))}
    </ImageList>
  );
};
