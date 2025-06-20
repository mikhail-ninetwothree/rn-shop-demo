import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet';
import React, { forwardRef, useCallback } from 'react';
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop';
import { useTheme } from '@rneui/themed';

export default forwardRef<BottomSheetModal, BottomSheetModalProps>(({ children, ...props }: BottomSheetModalProps, ref) => {
    const { theme } = useTheme();

    const renderBackdrop = useCallback(
        (backdropProps: BottomSheetBackdropProps) => (
            <BottomSheetBackdrop
                style={{ backgroundColor: theme.colors.bsBackdrop }}
                enableTouchThrough={false}
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                {...backdropProps}
            />
        ), [theme.colors.bsBackdrop]
    );

    return (
        <BottomSheetModal
            ref={ref}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            enableDynamicSizing={true}
            handleIndicatorStyle={{ backgroundColor: theme.colors.bsHandleIndicator }}
            {...props}
        >
            {children}
        </BottomSheetModal>
    );
});
