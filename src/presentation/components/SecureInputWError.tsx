import { forwardRef, useState } from "react";
import { TextInput } from 'react-native';
import InputWError, { InputWErrorProps } from "./InputWError";
import Icons from "src/util/resources/Icons";

export default forwardRef<TextInput, InputWErrorProps>(
    ({...props}: InputWErrorProps, ref) => {
        const [isPasswordSecure, setPasswordSecurity] = useState(true);
        const handeRightIconClick = () => {
            setPasswordSecurity(!isPasswordSecure);
        };

        return (
            <InputWError 
                RightIconSvg={isPasswordSecure ? Icons.EyeOff : Icons.EyeOn}
                rightIconClick={() => handeRightIconClick()}
                secureTextEntry={isPasswordSecure}
                {...props} />
        );
    }
);