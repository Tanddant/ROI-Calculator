import * as React from 'react';
import { getCurrencySymbol, getCurrentLocale } from '../assets/Currency';
import { Text, TextField } from '@fluentui/react';
import { hoursToPrettyString } from '../assets/TimeParser';
import useQuery from '../hooks/useQuery';

export interface IBreakEvenCalculatorProps {
    DailyHours: number;
    WorkingDays: number;
    EmployeeCost: number;
    Currency: string;
}

export const BreakEvenCalculator: React.FunctionComponent<IBreakEvenCalculatorProps> = (props: React.PropsWithChildren<IBreakEvenCalculatorProps>) => {
    const { DailyHours, EmployeeCost, WorkingDays, Currency } = props;
    const [BreakevenCost, SetBreakevenCost] = useQuery<number>("BreakevenCost",30);

    const formatter = Intl.NumberFormat(getCurrentLocale(), { style: 'currency', currency: Currency });

    const employeeHourlyCost = EmployeeCost / (DailyHours * WorkingDays)
    return (
        <div style={{ maxWidth: "500px", margin: 10 }}>
            <Text variant='xLarge'>Break even calculator</Text>

            <br />
            <Text variant='medium'>Let's say you're considering giving your employees a Microsoft Copilot license, you would want to know when you can expect that license cost to break even, that's exactly what this tool will help you with!</Text>
            <br />
            <br />
            <Text>Simply enter the monthly cost of whatever you're considering, and we'll calculate the breakeven point for you, if you want to change the employee info, simply press the gear icon in the top right</Text>
            <br />
            <br />

            <TextField label='Price/month' type='number' value={BreakevenCost as any as string} onChange={(_, val) => SetBreakevenCost(parseInt(val as string))} suffix={getCurrencySymbol(getCurrentLocale(), Currency)} />
            <br />

            <Text>
                Employee info:
                <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr" }}>
                    <div>Total cost to company</div><div>{formatter.format(EmployeeCost)}</div>
                    <div>Hourly const</div><div>{formatter.format(employeeHourlyCost)}</div>
                    <div>Daily cost</div><div>{formatter.format(EmployeeCost / WorkingDays)}</div>
                </div>
            </Text>

            <br />
            Breakeven point: {hoursToPrettyString((BreakevenCost / employeeHourlyCost))}
        </div>
    );
};