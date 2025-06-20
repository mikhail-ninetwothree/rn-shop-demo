import BottomSheet, { BottomSheetBackdrop, BottomSheetProps } from '@gorhom/bottom-sheet';
import React, { forwardRef, useCallback } from 'react';
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop';
import { useTheme } from '@rneui/themed';

export interface OnCloseBottomSheetProp {
    onClose: () => void;
}

export default forwardRef<BottomSheet, BottomSheetProps>(({ children, ...props }: BottomSheetProps, ref) => {
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
        <BottomSheet
            ref={ref}
            index={-1}
            enablePanDownToClose={true}
            enableDynamicSizing={false}
            enableOverDrag={false}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{ backgroundColor: theme.colors.bsHandleIndicator }}
            {...props}
        >
            {children}
        </BottomSheet>
    );
});
