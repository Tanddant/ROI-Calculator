import * as React from 'react';
import { getCurrencySymbol, getCurrentLocale } from '../assets/Currency';
import { AnimationStyles, Icon, Link, Text, mergeStyles } from '@fluentui/react';
import { hoursToPrettyString } from '../assets/TimeParser';
import useQuery from '../hooks/useQuery';
import { FormattedNumberField } from './FormattedNumberField';

export interface IBreakevenCalculatorProps {
    DailyHours: number;
    WorkingDays: number;
    EmployeeCost: number;
    Currency: string;
}

export const BreakevenCalculator: React.FunctionComponent<IBreakevenCalculatorProps> = (props: React.PropsWithChildren<IBreakevenCalculatorProps>) => {
    const { DailyHours, EmployeeCost, WorkingDays, Currency } = props;
    const [BreakevenCost, SetBreakevenCost] = useQuery<number>("BreakevenCost", 30);

    const formatter = Intl.NumberFormat(getCurrentLocale(), { style: 'currency', currency: Currency });

    const employeeHourlyCost = EmployeeCost / (DailyHours * WorkingDays)
    return (
        <div className={mergeStyles(AnimationStyles.slideDownIn20, { margin: "1em" })}>

            <Text variant='xLarge'>Breakeven calculator</Text>
            <br />
            <br />
            <Text>Let's say you're considering giving your employees a Microsoft Copilot license, you would want to know when you can expect that license cost to breakeven, that's exactly what this tool will help you with!</Text>
            <br />
            <hr />
            <Text>Simply enter the monthly cost of whatever you're considering, and it'll calculate the breakeven point for you, if you want to change the employee info, simply press the <Icon iconName='settings' />-icon in the top right</Text>
            <br />
            <br />

            <div style={{ maxWidth: 960 }}>
                <FormattedNumberField label='Price/month' currentValue={BreakevenCost} onValueChanged={val => SetBreakevenCost(val)} suffix={getCurrencySymbol(getCurrentLocale(), Currency)} />
                <br />
                <Text>
                    Employee info:
                    <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>
                        <div>Total cost to company</div><div>{formatter.format(EmployeeCost)}</div>
                        <div>Hourly const</div><div>{formatter.format(employeeHourlyCost)}</div>
                        <div>Daily cost</div><div>{formatter.format(EmployeeCost / WorkingDays)}</div>
                        <div>Weekly cost</div><div>{formatter.format(EmployeeCost / WorkingDays * 5)}</div>
                        <div>Monthly cost</div><div>{formatter.format(EmployeeCost / 12)}</div>
                    </div>
                </Text>

                <br />
                <Text styles={{root: {fontSize: "1.5rem", fontWeight: "bold"}}}>Breakeven point: <span style={{ borderBottom: "3px double" }}>{hoursToPrettyString((BreakevenCost / employeeHourlyCost))}</span></Text>
                <br />
                <br />
                <Text variant='small'>Full credit for the idea behind this calculator goes to <Link href='https://twitter.com/ChrisO_Brien' target='_blank'>Chris O'Brien</Link></Text>
            </div>
        </div>
    );
};