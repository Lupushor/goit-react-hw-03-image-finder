import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul class="gallery">
      {images.map(({ id, largeImageURL, tags, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          tags={tags}
          webformatURL={webformatURL}
        />
      ))}
    </ul>
  );
};
