import * as React from 'react';
import { InputAdornmentProps } from '@material-ui/core/InputAdornment';
import { BaseTextFieldProps, TextFieldProps } from '@material-ui/core/TextField';
import { ExtendMui } from '../typings/extendMui';
import { IconButtonProps } from '@material-ui/core/IconButton';
export interface KeyboardDateInputProps extends ExtendMui<BaseTextFieldProps, 'variant' | 'onError' | 'onChange' | 'value'> {
    format: string;
    onChange: (value: string | null) => void;
    onClick?: () => void;
    validationError?: React.ReactNode;
    inputValue: string;
    inputProps?: TextFieldProps['inputProps'];
    InputProps?: TextFieldProps['InputProps'];
    /** Override input component */
    TextFieldComponent?: React.ComponentType<TextFieldProps>;
    /** Icon displaying for open picker button */
    keyboardIcon?: React.ReactNode;
    /** Pass material-ui text field variant down, bypass internal variant prop */
    inputVariant?: TextFieldProps['variant'];
    /**
     * Custom mask. Can be used to override generate from format. (e.g. __/__/____ __:__)
     */
    mask?: string;
    /**
     * Char string that will be replaced with number (for "_" mask will be "__/__/____")
     * @default '_'
     */
    maskChar?: string;
    /**
     * Refuse values regexp
     * @default /[^\d]+/gi
     */
    refuse?: RegExp;
    /**
     * Props to pass to keyboard input adornment
     * @type {Partial<InputAdornmentProps>}
     */
    InputAdornmentProps?: Partial<InputAdornmentProps>;
    /**
     * Props to pass to keyboard adornment button
     * @type {Partial<IconButtonProps>}
     */
    KeyboardButtonProps?: Partial<IconButtonProps>;
    /** Custom formatter to be passed into Rifm component */
    rifmFormatter?: (str: string) => string;
}
declare const KeyboardDateInput: React.FunctionComponent<KeyboardDateInputProps>;
export default KeyboardDateInput;
