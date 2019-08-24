import * as React from 'react';
export interface YearProps {
    children: React.ReactNode;
    disabled?: boolean;
    onSelect: (value: any) => void;
    selected?: boolean;
    value: any;
    forwardedRef?: React.Ref<HTMLElement | null>;
}
export declare const useStyles: (props?: any) => Record<"root" | "yearSelected" | "yearDisabled", string>;
export declare const Year: React.FC<YearProps>;
declare const _default: React.ForwardRefExoticComponent<YearProps & React.RefAttributes<HTMLElement>>;
export default _default;
