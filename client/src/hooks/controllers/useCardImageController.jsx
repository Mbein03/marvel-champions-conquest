import { useState } from 'react';
import * as helpers from '../../helpers/helpers';

export const useCardImageController = () => {
  // Set state to track if card images are updating
  const [imagesUpdating, setImagesUpdating] = useState(false);

  // Fire off API request to update images in DB from Marvel CDB API
  const updateCardImages = async () => {
    setImagesUpdating(true);
    const updatedCards = await helpers.updateCardImages();
    setImagesUpdating(false);
    console.log('Updated Cards:', updatedCards);
  };

  return {
    updateCardImages,
    imagesUpdating,
  };
};
