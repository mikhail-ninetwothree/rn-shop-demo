import React from 'react';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { Colors, Text, useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Dimens from '@dimens';
import Fonts from '@fonts';
import { getString } from '@localization';
import { Strings } from '@strings';
import { SvgProps } from 'react-native-svg';
import ButtonDanger from '@components/button/ButtonDanger';
import ButtonOutline from '@components/button/ButtonOutline';
import Icons from '@icons';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { isIOS } from '@appInfo';
import ButtonPrimary from '@components/button/ButtonPrimary';

export interface CancelActionBottomSheetProps {
    title: string;
    ImageSvg: React.FC<SvgProps>;
    btnPrimaryTitle?: string;
    btnSecondaryTitle?: string;
    showBtnPrimaryIcon?: boolean;
    isBtnDanger?: boolean;
    onCancel: () => void;
    onGoBack: () => void;
}


/** This is a bottom sheet to showcase the usage, but the "Cancel" BS is pretty common on projects, so it could be useful.
 /* Please refer to [./hooks/useCancelActionBottomSheet.tsx] for the usage showcase.
 */
export default (
    {
        ImageSvg,
        btnPrimaryTitle = getString(Strings.cancel),
        btnSecondaryTitle = getString(Strings.back),
        isBtnDanger = true,
        showBtnPrimaryIcon = true,
        ...props
    }: CancelActionBottomSheetProps
) => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);

    return (
        <BottomSheetView style={styles.bsContainer}>
            <ImageSvg/>
            <Text style={styles.title}>{props.title}</Text>

            {isBtnDanger ?
                <ButtonDanger
                    onClick={props.onCancel}
                    title={btnPrimaryTitle}
                    marginTop={Dimens.marginPrimary4X}
                    IconSvg={showBtnPrimaryIcon ? Icons.Trash : undefined}/> :
                <ButtonPrimary
                    onClick={props.onCancel}
                    title={btnPrimaryTitle}
                    marginTop={Dimens.marginPrimary4X}/>
            }
            <ButtonOutline onClick={props.onGoBack} title={btnSecondaryTitle} marginTop={Dimens.marginPrimary2X}/>
        </BottomSheetView>
    );
};

export const themedStyles = (colors: Colors, insets: EdgeInsets) => StyleSheet.create({
    bsContainer: {
        backgroundColor: colors.background,
        paddingHorizontal: Dimens.marginPrimary2X,
        paddingTop: Dimens.marginPrimary2X,
        paddingBottom: insets.bottom + (isIOS ? Dimens.marginPrimary : Dimens.marginPrimary2X),
        alignItems: 'center',
        flex: Dimens.fullFlex,
    },
    title: {
        marginTop: Dimens.marginPrimary,
        ...Fonts.H3,
        color: colors.textPrimary,
        textAlign: 'center',
    },
});
