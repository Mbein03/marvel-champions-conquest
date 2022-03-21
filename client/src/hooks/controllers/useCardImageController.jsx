import { useState } from 'react';
import * as api from '../../helpers/api';

export const useCardImageController = () => {
  const [imagesUpdating, setImagesUpdating] = useState(false);

  const updateCardImages = async () => {
    setImagesUpdating(true);
    await api.updateCardImages();
    setImagesUpdating(false);
  };

  return {
    updateCardImages,
    imagesUpdating,
  };
};
