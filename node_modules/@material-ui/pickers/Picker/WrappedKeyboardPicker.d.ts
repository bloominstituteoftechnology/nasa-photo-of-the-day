import * as React from 'react';
import { KeyboardDateInputProps } from '../_shared/KeyboardDateInput';
import { ToolbarComponentProps } from './Picker';
import { ExtendWrapper } from '../wrappers/Wrapper';
import { StateHookOptions } from '../_shared/hooks/usePickerState';
import { DateValidationProps } from '../_helpers/text-field-helper';
import { BaseKeyboardPickerProps } from '../_shared/hooks/useKeyboardPickerState';
export declare type WrappedKeyboardPickerProps = DateValidationProps & BaseKeyboardPickerProps & ExtendWrapper<KeyboardDateInputProps>;
export interface MakePickerOptions<T> {
    useOptions: (props: any) => StateHookOptions;
    getCustomProps?: (props: T) => Partial<T>;
    DefaultToolbarComponent: React.ComponentType<ToolbarComponentProps>;
}
export declare function makeKeyboardPicker<T extends any>({ useOptions, getCustomProps, DefaultToolbarComponent, }: MakePickerOptions<WrappedKeyboardPickerProps & T>): React.FC<WrappedKeyboardPickerProps & T>;
