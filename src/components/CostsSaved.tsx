import * as React from 'react';
import './TimeTable.css'
import useQuery from '../hooks/useQuery';
import { IKeyValue } from '../models/IKeyValue';
import { getCurrentLocale } from '../assets/Currency';
import { AnimationStyles, Slider, Text, TextField, mergeStyles } from '@fluentui/react';

export interface ICostsSavedProps {
    DailyHours: number;
    WorkingDays: number;
    EmployeeCost: number;
    Currency: string;
}


export const CostsSaved: React.FunctionComponent<ICostsSavedProps> = (props: React.PropsWithChildren<ICostsSavedProps>) => {
    const { DailyHours, EmployeeCost, WorkingDays, Currency } = props;
    const [NumberOfEmployees, SetNumberOfEmployees] = useQuery("NumberOfEmployees", 300);
    const [SystemLifetime, SetSystemLifetime] = useQuery("SystemLifetime", 5);

    const XAxis: IKeyValue[] = [{ key: "50/Day", value: 50 }, { key: "5/Day", value: 5 }, { key: "Daily", value: 1 }, { key: "Weekly", value: 1 / 5 }, { key: "Monthly", value: 1 / (WorkingDays / 12) }, { key: "Yearly", value: 1 / WorkingDays }]
    const YAxis: IKeyValue[] = [{ key: "1 Second", value: 1 / 60 / 60 }, { key: "5 Seconds", value: 5 / 60 / 60 }, { key: "30 Seconds", value: 30 / 60 / 60 }, { key: "1 Minute", value: 1 / 60 }, { key: "5 Minutes", value: 5 / 60 }, { key: "10 Minutes", value: 10 / 60 }, { key: "30 Minutes", value: 30 / 60 }, { key: "1 Hour", value: 1 }, { key: "6 Hours", value: 6 }]

    const formatter = Intl.NumberFormat(getCurrentLocale(), { style: 'currency', currency: Currency });
    const EmployeeHourlyCost = EmployeeCost / (DailyHours * WorkingDays);

    return (
        <>
            <div className={mergeStyles(AnimationStyles.slideDownIn20, { margin: "1em" })}>
                <Text variant='xLarge'>How much money can you save by automating a task?</Text>
                <br />
                <Text>I often find the numbers hard to understand when we're talking about savings from even small time optimizations, this table will crunch the numbers, and tell you exactly how much you can spend on your next optimization, and still make money.</Text>
                <br />
                <hr />


                <div style={{ display: 'flex', width: "100%", flexWrap: "wrap" }}>
                    <Slider styles={{ root: { flexGrow: 1, minWidth: 200 } }} value={SystemLifetime} step={1} onChange={val => SetSystemLifetime(val)} label='System life time (years)' min={1} max={15} />
                    <TextField styles={{ root: { flexGrow: 1, minWidth: 200 } }} type='number' value={NumberOfEmployees as any as string} label='Number of employees' onChange={(_, val) => SetNumberOfEmployees(parseInt(val as string))} />
                </div>

                <div style={{ display: 'flex', margin: "10px" }}>
                    <div style={{ textAlign: "center", writingMode: "vertical-lr", transform: "rotate(180deg)" }}> How much time you shave off</div>
                    <div style={{ flexGrow: 1, maxWidth: "100%", overflowX: "auto" }}>
                        <div style={{ textAlign: "center" }}>How often you do the task</div>
                        <div className='Table' style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
                            <div className='Cell'></div>
                            {XAxis.map((header) => <div className='Cell Header'>{header.key}</div>)}

                            {YAxis.map((row, rowIndex) => {
                                return <>
                                    <div className='Cell Header'>{YAxis[rowIndex].key}</div>
                                    {XAxis.map((column) => {

                                        const SavedHours = column.value * row.value;
                                        const NumberOfTimesExecuted = (column.value * WorkingDays * SystemLifetime);
                                        const HoursToDoTask = row.value;
                                        const TotalSaving = NumberOfTimesExecuted * (HoursToDoTask * EmployeeHourlyCost) * NumberOfEmployees

                                        if (SavedHours > DailyHours)
                                            return <div className='Cell Inactive'></div>

                                        return <div className='Cell'>{formatter.format(TotalSaving)}</div>;
                                    })}
                                </>
                            })}
                        </div>
                    </div>
                </div >
            </div>
        </>
    );
};