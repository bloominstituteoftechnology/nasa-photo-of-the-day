import * as React from 'react';
import { BaseTextFieldProps, TextFieldProps } from '@material-ui/core/TextField';
import { ExtendMui } from '../typings/extendMui';
export interface PureDateInputProps extends ExtendMui<BaseTextFieldProps, 'variant' | 'onError' | 'onChange' | 'value'> {
    /** Pass material-ui text field variant down, bypass internal variant prop */
    inputVariant?: TextFieldProps['variant'];
    /** Override input component */
    TextFieldComponent?: React.ComponentType<TextFieldProps>;
    InputProps?: TextFieldProps['InputProps'];
    inputProps?: TextFieldProps['inputProps'];
    inputValue: string;
    validationError?: React.ReactNode;
}
export declare const PureDateInput: React.FC<PureDateInputProps>;
