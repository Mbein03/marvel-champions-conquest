import { useState } from 'react';
import { api } from '../../helpers/constants';
import * as helpers from '../../helpers/helpers';

const useImageController = () => {
  const [imagesUpdating, setImagesUpdating] = useState(false);
  // Fire off API request to update images in DB from marvel cdb API
  const updateCardImages = () => {
    setImagesUpdating(true);
    helpers.fetchData(api.updateDatabase).then((cards) => {
      setImagesUpdating(false);
      console.log(cards);
    });
  };
  return {
    updateCardImages,
    imagesUpdating,
  };
};

export default useImageController;
