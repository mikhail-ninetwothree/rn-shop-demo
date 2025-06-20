import React, { useRef } from 'react';
import { Text, useTheme } from '@rneui/themed';
import { Formik } from 'formik';
import { TextInput, View } from 'react-native';
import { Spacer } from '@components/Spacer';
import { themedStyles } from './styles';
import { loginFormValidationSchema } from './validator';
import { getString } from '@localization';
import { Strings } from '@strings';
import InputWError, { handleFieldChange } from '@components/InputWError';
import { LoginData } from '@data/auth/models/LoginData';
import { useLogin } from './hooks/useLogin';
import FullscreenProgress from '@components/FullscreenProgress';
import { appVersion, flavor } from '@appInfo';
import Icons from '@icons';
import Dimens from '@dimens';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const USERNAME_FIELD = 'username';
const PASSWORD_FIELD = 'password';

const initialValues: LoginData = {
    username: '',
    password: '',
};

export default () => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);
    const { makeLogin, isLoading } = useLogin();
    const passwordInputRef = useRef<TextInput>(null);

    return (
        <View style={styles.container}>
            <Icons.Terminal width={Dimens.loginIcSize} height={Dimens.loginIcSize} fill={theme.colors.primary}/>
            <Text style={styles.version}>{flavor?.toUpperCase()} {appVersion}</Text>
            <Formik
                initialValues={initialValues}
                validationSchema={loginFormValidationSchema}
                validateOnBlur={true}
                validateOnChange={false}
                validateOnMount={false}
                onSubmit={values => makeLogin(values)}>
                {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldError }) => (
                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <InputWError
                                onChangeText={handleFieldChange(USERNAME_FIELD, setFieldError, handleChange)}
                                handleBlur={handleBlur(USERNAME_FIELD)}
                                value={values.username}
                                error={errors.username}
                                returnKeyType={'next'}
                                placeholder={getString(Strings.loginIUsername)}
                                onSubmitEditing={() => passwordInputRef.current?.focus()}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <InputWError
                                ref={passwordInputRef}
                                onChangeText={handleFieldChange(PASSWORD_FIELD, setFieldError, handleChange)}
                                handleBlur={handleBlur(PASSWORD_FIELD)}
                                value={values.password}
                                error={errors.password}
                                returnKeyType={'done'}
                                placeholder={getString(Strings.loginIPassword)}
                                onSubmitEditing={() => handleSubmit()}
                            />
                        </View>
                        <Spacer/>
                        <ButtonPrimary
                            marginTop={Dimens.marginPrimary4X}
                            title={getString(Strings.loginBtn)}
                            onClick={handleSubmit}
                            disabled={isLoading || !values.username.length || !values.password.length}
                        />
                    </View>
                )}
            </Formik>
            {isLoading && <FullscreenProgress/>}
        </View>
    );
};
