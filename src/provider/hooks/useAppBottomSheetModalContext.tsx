import { useContext } from 'react';
import { AppBottomSheetModalContext } from '@provider/AppBottomSheetModalProvider';

export default () => {
  const modalContext = useContext(AppBottomSheetModalContext);

  if (!modalContext) {
    throw new Error('Initialization of the modal context is required');
  }

  return {
    ...modalContext,
  };
};
