import * as React from 'react';
import { BasePickerProps } from '../typings/BasePicker';
import { MakePickerOptions } from './WrappedKeyboardPicker';
import { ExtendWrapper } from '../wrappers/Wrapper';
import { DateValidationProps } from '../_helpers/text-field-helper';
import { PureDateInputProps } from '../_shared/PureDateInput';
export declare type WrappedPurePickerProps = DateValidationProps & BasePickerProps & ExtendWrapper<PureDateInputProps>;
export declare function makePurePicker<T extends any>({ useOptions, getCustomProps, DefaultToolbarComponent, }: MakePickerOptions<WrappedPurePickerProps & T>): React.FC<WrappedPurePickerProps & T>;
