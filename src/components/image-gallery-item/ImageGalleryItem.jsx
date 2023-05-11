export const ImageGalleryItem = ({ largeImageURL, tags, webformatURL }) => {
  return (
    <li class="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
