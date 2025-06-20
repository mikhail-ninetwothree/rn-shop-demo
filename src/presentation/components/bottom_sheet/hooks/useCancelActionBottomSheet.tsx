import CancelActionBottomSheet, { CancelActionBottomSheetProps } from '@components/bottom_sheet/CancelActionBottomSheet';
import React, { useCallback } from 'react';
import useAppBottomSheetModalContext from '@provider/hooks/useAppBottomSheetModalContext';

interface CancelActionBottomSheetHookProps extends Omit<CancelActionBottomSheetProps, 'onCancel' | 'onGoBack'> {
    onCancelClick: () => void,
    onGoBackClick?: () => void,
}

export default () => {
    const { onOpenBSModal, onCloseBSModal } = useAppBottomSheetModalContext();

    const openCancelActionBottomSheet = useCallback((cancelActionBsProps: CancelActionBottomSheetHookProps) => {
        onOpenBSModal({
            body: <CancelActionBottomSheet
                onCancel={() => {
                    onCloseBSModal();
                    cancelActionBsProps.onCancelClick();
                }}
                onGoBack={() => {
                    onCloseBSModal();
                    cancelActionBsProps.onGoBackClick?.();
                }}
                {...cancelActionBsProps}
            />,
        });
    }, [onCloseBSModal, onOpenBSModal]);

    return { openCancelActionBottomSheet };
};
