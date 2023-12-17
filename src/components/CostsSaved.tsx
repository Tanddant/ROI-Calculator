import * as React from 'react';
import './TimeTable.css'
import useQuery from '../hooks/useQuery';
import { IKeyValue } from '../models/IKeyValue';
import { getCurrentLocale } from '../assets/Currency';
import { AnimationStyles, Checkbox, Dropdown, ResponsiveMode, Slider, Text, Toggle, mergeStyles } from '@fluentui/react';
import { FormattedNumberField } from './FormattedNumberField';
import { hoursToPrettyString } from '../assets/TimeParser';

export interface ICostsSavedProps {
    DailyHours: number;
    WorkingDays: number;
    EmployeeCost: number;
    Currency: string;
}

enum ViewMode {
    MoneySaved = "Money",
    TimeSaved = "Time"
}

export const CostsSaved: React.FunctionComponent<ICostsSavedProps> = (props: React.PropsWithChildren<ICostsSavedProps>) => {
    const { DailyHours, EmployeeCost, WorkingDays, Currency } = props;
    const [NumberOfEmployees, SetNumberOfEmployees] = useQuery("NumberOfEmployees", 300);
    const [SystemLifetime, SetSystemLifetime] = useQuery("SystemLifetime", 5);
    const [ShowTimeSaved, SetShowTimeSaved] = useQuery<ViewMode>("TimeSaved_DisplayMode", ViewMode.MoneySaved);

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


                <div style={{ display: 'flex', width: "100%", flexWrap: "wrap", gap: "1em" }}>
                    <Dropdown
                        styles={{ root: { flexGrow: 1, minWidth: 250, marginTop: "auto" } }}
                        label='View mode'
                        responsiveMode={ResponsiveMode.large}
                        options={[{ key: ViewMode.MoneySaved, text: "Money saved" }, { key: ViewMode.TimeSaved, text: "Time saved" }]}
                        selectedKey={ShowTimeSaved}
                        onChange={(_, val) => SetShowTimeSaved(val?.key as ViewMode)} />
                    <FormattedNumberField styles={{ root: { flexGrow: 1, minWidth: 250, marginTop: "auto" } }} type='number' currentValue={NumberOfEmployees} label='Number of employees' onValueChanged={val => SetNumberOfEmployees(val)} />
                    <Slider styles={{ root: { flexGrow: 1, minWidth: 250, marginTop: "auto" } }} value={SystemLifetime} step={1} onChange={val => SetSystemLifetime(val)} label='System life time (years)' min={1} max={15} />
                </div>

                <div style={{ display: 'flex', margin: "10px" }}>
                    <div style={{ textAlign: "center", writingMode: "vertical-lr", transform: "rotate(180deg)" }}> How much time you shave off</div>
                    <div style={{ flexGrow: 1, maxWidth: "100%", overflowX: "auto" }}>
                        <div style={{ textAlign: "center" }}>How often you do the task</div>
                        <div className='Table' style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
                            <div className='Cell' key={`Corner`}></div>
                            {XAxis.map((header) => <div className='Cell Header' key={`Header-${header.key}`}>{header.key}</div>)}

                            {YAxis.map((row, rowIndex) => {
                                return <>
                                    <div className='Cell Header' key={`Header-${row.key}`}>{YAxis[rowIndex].key}</div>
                                    {XAxis.map((column) => {

                                        const SavedHours = column.value * row.value;
                                        const NumberOfTimesExecuted = (column.value * WorkingDays * SystemLifetime);
                                        const HoursToDoTask = row.value;
                                        const TotalSaving = NumberOfTimesExecuted * (HoursToDoTask * EmployeeHourlyCost) * NumberOfEmployees

                                        if (SavedHours > DailyHours)
                                            return <div className='Cell Inactive' key={`${row.key}-${column.key}`}></div>

                                        if (ShowTimeSaved === ViewMode.TimeSaved)
                                            return <div className='Cell' key={`${row.key}-${column.key}`}>{hoursToPrettyString(NumberOfTimesExecuted * HoursToDoTask * NumberOfEmployees)}</div>;
                                        return <div className='Cell' key={`${row.key}-${column.key}`}>{formatter.format(TotalSaving)}</div>;
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