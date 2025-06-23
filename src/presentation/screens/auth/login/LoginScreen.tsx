import { useRef } from 'react';
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
import Images from '@images';
import Dimens from '@dimens';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SecureInputWError from 'src/presentation/components/SecureInputWError';
import Icons from 'src/util/resources/Icons';

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
    const { makeLogin, isPending } = useLogin();
    const passwordInputRef = useRef<TextInput>(null);
    return (
        <View style={styles.container}>
            <Images.LoginBackground width={Dimens.full} height={Dimens.full} style={styles.background}/>
            <View style={styles.content}>
                <Spacer/>
                <Text style={styles.title}>{getString(Strings.loginTitle)}</Text>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>{getString(Strings.loginSubtitle)}</Text>
                    <Icons.Heart/>
                </View>
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
                                    placeholder={getString(Strings.loginIUsername)}
                                    onChangeText={handleFieldChange(USERNAME_FIELD, setFieldError, handleChange)}
                                    handleBlur={handleBlur(USERNAME_FIELD)}
                                    value={values.username}
                                    error={errors.username}
                                    returnKeyType={'next'}
                                    autoCapitalize={'none'}
                                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <SecureInputWError
                                    ref={passwordInputRef}
                                    placeholder={getString(Strings.loginIPassword)}
                                    onChangeText={handleFieldChange(PASSWORD_FIELD, setFieldError, handleChange)}
                                    handleBlur={handleBlur(PASSWORD_FIELD)}
                                    value={values.password}
                                    error={errors.password}
                                    returnKeyType={'done'}
                                    onSubmitEditing={() => handleSubmit()}
                                />
                            </View>
                            <ButtonPrimary
                                marginTop={Dimens.marginPrimary4_5X}
                                marginBottom={Dimens.marginPrimary9X}
                                title={getString(Strings.loginBtn)}
                                onClick={handleSubmit}
                                isDisabled={isPending || !values.username.length || !values.password.length}
                            />
                        </View>
                    )}
                </Formik>
                {isPending && <FullscreenProgress/>}
            </View>
        </View>
    );
};