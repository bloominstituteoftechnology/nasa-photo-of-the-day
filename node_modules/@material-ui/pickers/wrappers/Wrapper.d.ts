import * as React from 'react';
import { Omit } from '@material-ui/core';
import { PureDateInputProps } from '../_shared/PureDateInput';
import { ModalWrapperProps } from './ModalWrapper';
import { InlineWrapperProps } from './InlineWrapper';
import { KeyboardDateInputProps } from '../_shared/KeyboardDateInput';
export declare type WrapperVariant = 'dialog' | 'inline' | 'static';
export interface WrapperProps<T> {
    open: boolean;
    onAccept: () => void;
    onDismiss: () => void;
    onClear: () => void;
    onSetToday: () => void;
    InputComponent: React.FC<T>;
    DateInputProps: T;
    wider?: boolean;
    showTabs?: boolean;
}
declare type OmitInnerWrapperProps<T extends WrapperProps<any>> = Omit<T, keyof WrapperProps<any> | 'showTabs'>;
export declare type ModalRoot = OmitInnerWrapperProps<ModalWrapperProps>;
export declare type InlineRoot = OmitInnerWrapperProps<InlineWrapperProps>;
export declare type ExtendWrapper<TInput extends PureDateInputProps | KeyboardDateInputProps> = {
    /**
     * Picker container option
     * @default 'dialog'
     */
    variant?: WrapperVariant;
} & ModalRoot & InlineRoot & Omit<TInput, 'inputValue' | 'onChange' | 'format' | 'validationError' | 'format' | 'forwardedRef'>;
export declare function getWrapperFromVariant<T>(variant?: WrapperVariant): React.ComponentType<InlineWrapperProps<T> | ModalWrapperProps<T>>;
declare type Props<T> = {
    variant?: WrapperVariant;
    children?: React.ReactChild;
} & (ModalWrapperProps<T> | InlineWrapperProps<T>);
export declare const VariantContext: React.Context<"dialog" | "inline" | "static" | null>;
export declare const Wrapper: <T extends KeyboardDateInputProps | PureDateInputProps>(p: Props<T>) => React.ReactElement<Props<T>>;
export {};
