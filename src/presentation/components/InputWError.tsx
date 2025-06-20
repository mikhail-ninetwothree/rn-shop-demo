import React, { forwardRef, useCallback, useEffect } from 'react';
import { Colors, Input, InputProps, Text, useTheme } from '@rneui/themed';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';
import Dimens from '@dimens';
import Fonts from '@fonts';
import { SvgProps } from 'react-native-svg';
import { IconNode } from '@rneui/base/dist/Icon';
import { isIOS } from '@appInfo';

export interface InputWErrorProps extends InputProps {
    handleBlur?: {
        (e: React.FocusEvent<any>): void;
        <T = string | any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    },
    LeftIconSvg?: React.FC<SvgProps>;
    RightIconSvg?: React.FC<SvgProps>;
    rightIconClick?: () => void;
    RightComponentNode?: IconNode;
    LeftComponentNode?: IconNode;
    error?: string,
    isDisabled?: boolean,
    onFocusChange?: (isFocused: boolean) => void,
    formatInputValue?: (text: string) => string,
}

// TODO: need to fix jumping of the text when started typing.
export default forwardRef<TextInput, InputWErrorProps>(
    ({
         handleBlur,
         value,
         label,
         LeftIconSvg,
         RightIconSvg,
         RightComponentNode,
         LeftComponentNode,
         onFocusChange,
         onChangeText,
         formatInputValue,
         ...props
     }: InputWErrorProps, ref) => {
        const [isFocused, setFocusedState] = useState<boolean>(false);
        const [hasIconOrNode, setHasIconOrNode] = useState<boolean>(false);
        const { theme } = useTheme();
        const styles = themedStyles(theme.colors);
        const [inputValue, setInputValue] = useState<string>(value ?? '');

        useEffect(() => {
            setInputValue(value ?? '');
        }, [value]);

        useEffect(() => {
            onFocusChange?.(isFocused);
        }, [isFocused, onFocusChange]);

        useEffect(() => {
            setHasIconOrNode(!!(LeftIconSvg || LeftComponentNode || RightIconSvg || RightComponentNode));
        }, [LeftComponentNode, LeftIconSvg, RightComponentNode, RightIconSvg]);

        const handleTextChange = useCallback((text: string) => {
            const formatedValue = formatInputValue?.(text) ?? text;
            setInputValue(formatedValue);
            onChangeText?.(formatedValue);
        }, [formatInputValue, onChangeText]);

        const contentStateColor = props.isDisabled
            ? theme.colors.textSecondaryLight
            : props.error
                ? theme.colors.error
                : isFocused
                    ? theme.colors.textAppPrimary
                    : theme.colors.textPrimaryLight;

        return (
            <>
                <Input
                    ref={ref}
                    containerStyle={[styles.inputBar, isFocused && styles.inputBarFocused, props.error && styles.inputBarError, props.isDisabled && styles.inputBarDisabled]}
                    inputContainerStyle={[
                        styles.inputContainer,
                        hasIconOrNode ?
                            { marginTop: value ? -Dimens.marginPrimaryHalf1_5X : Dimens.marginPrimaryHalf } :
                            { marginTop: value ? -Dimens.marginPrimaryQuarter : Dimens.marginPrimaryHalf },
                    ]}
                    onBlur={() => {
                        handleBlur;
                        setFocusedState(false);
                    }}
                    placeholderTextColor={theme.colors.textPrimaryLight}
                    leftIcon={LeftIconSvg ? <LeftIconSvg
                        width={Dimens.textBtnIconSize}
                        height={Dimens.textBtnIconSize}
                        fill={contentStateColor}
                    /> : LeftComponentNode && LeftComponentNode}
                    rightIcon={RightIconSvg ?
                        <Pressable onPress={props.rightIconClick}>
                            <RightIconSvg
                                width={Dimens.textBtnIconSize}
                                height={Dimens.textBtnIconSize}
                                fill={contentStateColor}
                            />
                        </Pressable> : RightComponentNode && RightComponentNode
                    }
                    disabled={props.isDisabled}
                    multiline={false}
                    numberOfLines={1}
                    label={value ? label : ''}
                    labelStyle={[
                        styles.label,
                        { color: contentStateColor, marginTop: hasIconOrNode ? Dimens.marginPrimary1_75X : Dimens.marginPrimary1_25X },
                    ]}
                    inputStyle={[
                        styles.input,
                        { color: props.isDisabled ? theme.colors.textSecondaryLight : theme.colors.textPrimary },
                        isIOS && { marginBottom: (value || hasIconOrNode) ? Dimens.marginPrimaryHalf1_75X : Dimens.marginPrimaryThird },
                    ]}
                    renderErrorMessage={false}
                    onFocus={() => setFocusedState(true)}
                    returnKeyType={'next'}
                    keyboardType={'default'}
                    value={inputValue}
                    {...props}
                    onChangeText={handleTextChange}
                />
                {props.error && <Text style={styles.inputError}>{props.error}</Text>}
            </>
        );
    }
);

export const handleFieldChange = (
    field: string,
    setFieldError: Function,
    handleChange: Function,
    additionalCallbacks: (() => void)[] = []
) => {
    return (value: string) => {
        setFieldError(field, ''); // Clear error
        additionalCallbacks.forEach(callback => callback());
        handleChange(field)(value);
    };
};

const themedStyles = (colors: Colors) => StyleSheet.create({
    inputBar: {
        borderWidth: Dimens.borderWidth,
        borderColor: colors.greyOutline,
        backgroundColor: colors.inputBackground,
        borderRadius: Dimens.inputRadius,
        height: Dimens.inputHeight,
        justifyContent: 'center',
    },
    inputBarFocused: {
        borderWidth: Dimens.borderWidthThick,
        borderColor: colors.primary,
    },
    inputBarError: {
        borderWidth: Dimens.borderWidthThick,
        borderColor: colors.error,
    },
    inputBarDisabled: {
        backgroundColor: colors.disabledLight,
    },
    inputContainer: {
        borderBottomWidth: Dimens.zero,
        justifyContent: 'center',
        marginStart: isIOS ? Dimens.marginPrimaryHalf : Dimens.zero,
    },
    input: {
        ...Fonts.Body,
        justifyContent: 'center',
    },
    label: {
        ...Fonts.Caption,
        marginStart: Dimens.marginPrimaryHalf,
    },
    inputError: {
        ...Fonts.Caption,
        color: colors.error,
        marginTop: Dimens.marginPrimary,
        marginLeft: Dimens.marginPrimarySmallest,
    },
});
