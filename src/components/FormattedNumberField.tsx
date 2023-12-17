import * as React from 'react';
import { ITextFieldProps, TextField } from '@fluentui/react';
import { LocalizedNumberParser, getCurrentLocale } from '../assets/Currency';

const ALLOWED_KEY_INPUTS = [".", ",", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "F5"];

export interface IFormattedNumberFieldProps extends Omit<Omit<Omit<Omit<Omit<Omit<ITextFieldProps, 'onChange'>, 'onBlur'>, 'onKeyDown'>, 'value'>, 'defaultValue'>, 'onFocus'> {
    onValueChanged?: (value: number) => void
    currentValue: number
}

export const FormattedNumberField: React.FunctionComponent<IFormattedNumberFieldProps> = (props: React.PropsWithChildren<IFormattedNumberFieldProps>) => {
    const { onValueChanged, currentValue } = props;
    const [isEdit, setIsEdit] = React.useState<boolean>(false);
    const [_curVal, set_curVal] = React.useState<string>(currentValue + "");

    const displayValue = currentValue != null ? new Intl.NumberFormat(getCurrentLocale()).format(currentValue) : "-";

    return <TextField
        {...props}
        onFocus={(ev) => {
            if (onValueChanged != null) {
                setIsEdit(true)
                ev.target.selectionStart = ev.target.selectionEnd = ev.target.value.length;
            }
        }}
        value={isEdit ? _curVal : displayValue}
        type={isEdit ? 'number' : 'text'}
        onBlur={() => {
            setIsEdit(false);
        }}

        onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "a")
                return;

            if (e.key === "Enter")
                (e.target as HTMLInputElement).blur();

            if (!ALLOWED_KEY_INPUTS.some((key) => e.key === key))
                e.preventDefault();
        }}

        onChange={(_, val) => {
            set_curVal(val +"");
            if (onValueChanged != null) {
                if (val === "") {
                    onValueChanged(0);
                } else {
                    const parsed: number = new LocalizedNumberParser(getCurrentLocale()).parse(val + "");
                    onValueChanged(parsed);
                }
            }
        }}
    />
};