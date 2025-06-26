import { LoginData } from '@data/auth/models/LoginData';
import { Strings } from '@strings';
import { getString } from '@localization';
import { createYupSchema } from 'src/util/yup';
import * as Yup from 'yup';

export const getLoginFormValidationSchema = () => {
    return createYupSchema<LoginData>(
        Yup.object().shape({
            username: Yup.string().required(getString(Strings.errorRequiredField)),
            password: Yup.string()
                .required(getString(Strings.errorRequiredField))
                .min(6, getString(Strings.errorInvalidPassword)),
        })
    );
};