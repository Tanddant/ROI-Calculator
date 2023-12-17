import React from 'react';
import './App.css';
import { ActionButton, Text, getTheme, Nav, Icon, Link, AnimationStyles, mergeStyles, Dialog, TextField, Slider, Dropdown, DialogFooter, PrimaryButton, Stack, Label, Pivot, PivotItem } from '@fluentui/react';
import { NavigationKey } from './models/NavigationKey';
import useQuery from './hooks/useQuery';
import { TimeSaved } from './components/TimeSaved';
import { Home } from './components/Home';
import { CostsSaved } from './components/CostsSaved';
import { CurrencyOptions, getCurrencySymbol, getCurrentLocale } from './assets/Currency';
import { BreakevenCalculator } from './components/BreakevenCalculator';
import { Navigation } from './assets/Navigation';

export interface IAppProps { }

const theme = getTheme();
const App: React.FunctionComponent<IAppProps> = (props: React.PropsWithChildren<IAppProps>) => {
  const [ViewKey, SetViewKey] = useQuery<NavigationKey>('View', NavigationKey.Home);
  const [showSettings, setShowSettings] = React.useState(false);
  const [Currency, SetCurrency] = useQuery<string>('Currency', 'USD');
  const [WorkingDays, SetWorkingDays] = useQuery<number>('WorkingDays', 254);
  const [WorkingHours, SetWorkingHours] = useQuery<number>('WorkingHours', 7.5);
  const [EmployeeCost, SetEmployeeCost] = useQuery<number>('EmployeeCost', 100000);


  return (
    <>
      <div className="App">
        <div className={mergeStyles(AnimationStyles.fadeIn100, "App-header")} style={{ background: theme.palette.themeTertiary }}>
          <Text variant='xxLarge' style={{ margin: "auto 10px" }} onClick={() => SetViewKey(NavigationKey.Home)}> <Icon iconName='AllCurrency' />&nbsp;ROI Calculator</Text>
          <div style={{ display: "flex", justifyContent: 'flex-end' }}>
            <ActionButton iconProps={{ iconName: "Settings" }} onClick={() => setShowSettings(true)} />
          </div>
        </div>

        <div className='App-content'>

          <Nav
            className='Nav HideOnMobile'
            onLinkClick={(_, item) => { SetViewKey(item?.key as NavigationKey) }}
            selectedKey={ViewKey as string}
            groups={[Navigation]}
          />

          <Pivot
            className='HideOnDesktop'
            onLinkClick={(item) => { SetViewKey(item?.props.itemKey as NavigationKey) }}
            overflowBehavior='menu'
          >
            {Navigation.links.map(item => <PivotItem headerText={item.name} itemKey={item.key} key={item.key} />)}
          </Pivot>

          <div style={{ flexGrow: 1, overflowX: 'hidden' }}>

            <Dialog
              hidden={!showSettings}
              onDismiss={() => setShowSettings(false)}
              dialogContentProps={{ title: "Settings" }}
            >

              <Stack tokens={{ childrenGap: 5 }}>
                <Slider value={WorkingDays} min={1} max={365} step={1} label='Working days' onChange={val => SetWorkingDays(val)} />
                <Slider value={WorkingHours} min={0.5} max={24} step={.5} label='Hours/day' onChange={val => SetWorkingHours(val)} />
                <Dropdown
                  label="Currency"
                  selectedKey={Currency}
                  options={CurrencyOptions.map(x => ({ key: x, text: x }))}
                  onChange={(_, item) => SetCurrency(item?.key as string)}
                />

                <br />
                <Stack tokens={{ childrenGap: 5 }} >
                  <Label>Employee cost (fill one)</Label>
                  <TextField label="Yearly" value={EmployeeCost as any as string} onChange={(_, val) => SetEmployeeCost(parseFloat(val as string))} type='number' suffix={getCurrencySymbol(getCurrentLocale(), Currency)} />
                  <TextField label="Monthly" value={(EmployeeCost / 12) as any as string} onChange={(_, val) => SetEmployeeCost(parseFloat(val as string) * 12)} type='number' suffix={getCurrencySymbol(getCurrentLocale(), Currency)} />
                  <TextField label="Daily" value={(EmployeeCost / WorkingDays) as any as string} onChange={(_, val) => SetEmployeeCost(parseFloat(val as string) * WorkingDays)} type='number' suffix={getCurrencySymbol(getCurrentLocale(), Currency)} />
                  <TextField label="Hourly" value={(EmployeeCost / WorkingDays / WorkingHours) as any as string} onChange={(_, val) => SetEmployeeCost(parseFloat(val as string) * WorkingDays * WorkingHours)} type='number' suffix={getCurrencySymbol(getCurrentLocale(), Currency)} />
                </Stack>
              </Stack>

              <DialogFooter>
                <PrimaryButton onClick={() => setShowSettings(false)} text="Close" />
              </DialogFooter>
            </Dialog>

            {ViewKey === NavigationKey.Home && <Home />}
            {ViewKey === NavigationKey.TimeSaved && <TimeSaved />}
            {ViewKey === NavigationKey.CostSaved && <CostsSaved DailyHours={WorkingHours} EmployeeCost={EmployeeCost} WorkingDays={WorkingDays} Currency={Currency} />}
            {ViewKey === NavigationKey.Breakeven && <BreakevenCalculator DailyHours={WorkingHours} EmployeeCost={EmployeeCost} WorkingDays={WorkingDays} Currency={Currency} />}
          </div>

        </div>
        <div style={{ textAlign: 'center', marginTop: "auto", marginBottom: "1em" }}>
          <Text>&copy; {new Date().getFullYear()} - <Link href='https://dan-toft.dk/' target='_blank'>Dan Toft</Link> - <Link href='https://github.com/Tanddant/ROI-Calculator'>Source code 🧑‍💻</Link></Text>
        </div>

      </div >
    </>
  );
};

export default App;