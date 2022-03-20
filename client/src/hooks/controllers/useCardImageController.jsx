import { useState } from 'react';
import * as api from '../../helpers/api';

export const useCardImageController = () => {
  // Set state to track if card images are updating
  const [imagesUpdating, setImagesUpdating] = useState(false);

  // Fire off API request to update images in DB from Marvel CDB API
  const updateCardImages = async () => {
    setImagesUpdating(true);
    const updatedCards = await api.updateCardImages();
    setImagesUpdating(false);
    console.log('Updated Cards:', updatedCards);
  };

  return {
    updateCardImages,
    imagesUpdating,
  };
};
