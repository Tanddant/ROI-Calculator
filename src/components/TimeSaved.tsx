import * as React from 'react';
import './TimeTable.css';
import { Text, mergeStyles, AnimationStyles, Link } from '@fluentui/react';

export interface ITimeSavedProps {


}

export const TimeSaved: React.FunctionComponent<ITimeSavedProps> = (props: React.PropsWithChildren<ITimeSavedProps>) => {
    return (
        <div className={mergeStyles(AnimationStyles.slideDownIn20, { padding: "1em" })}>


            <Text variant='xLarge'>The inspiration</Text>
            <br />
            <Text>The original idea for this site stems from an very old xkcd meme that I would often refer to when thinking about building a script to automate a task, and I wanted everyone to be able to enjoy the awesomeness, so I built this entire site that'll do all the math for you!</Text>
            <br />
            <br />

            <Text variant='large'>How long can you work on making a routine task more efficient before you're spending more time than you save?</Text>
            <div style={{ display: 'flex' }}>   
                <div style={{ textAlign: "center", writingMode: "vertical-lr", transform: "rotate(180deg)" }}> How much time you shave off</div>
                <div style={{ flexGrow: 1 }}>
                    <div style={{ textAlign: "center" }}>How often you do the task</div>
                    <div className='Table' style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
                        <div></div>
                        <div><b>50/Day</b></div>
                        <div><b>5/Day</b></div>
                        <div><b>Daily</b></div>
                        <div><b>Weekly</b></div>
                        <div><b>Monthly</b></div>
                        <div><b>Yearly</b></div>

                        <div><b>1 Second</b></div>
                        <div>1 Day</div>
                        <div>2 Hours</div>
                        <div>30 Minutes</div>
                        <div>4 Minutes</div>
                        <div>1 Minute</div>
                        <div>5 Seconds</div>

                        <div><b>5 Seconds</b></div>
                        <div>5 Days</div>
                        <div>12 Hours</div>
                        <div>2 Hours</div>
                        <div>21 Minutes</div>
                        <div>5 Minutes</div>
                        <div>25 Seconds</div>

                        <div><b>30 Seconds</b></div>
                        <div>4 Weeks</div>
                        <div>3 Days</div>
                        <div>12 Hours</div>
                        <div>2 Hours</div>
                        <div>30 Minutes</div>
                        <div>2 Minutes</div>

                        <div><b>1 Minute</b></div>
                        <div>8 Weeks</div>
                        <div>6 Days</div>
                        <div>1 Day</div>
                        <div>4 Hours</div>
                        <div>1 Hour</div>
                        <div>5 Minutes</div>

                        <div><b>5 Minutes</b></div>
                        <div>9 Months</div>
                        <div>4 Weeks</div>
                        <div>6 Days</div>
                        <div>21 Hours</div>
                        <div>5 Hours</div>
                        <div>25 Minutes</div>

                        <div><b>30 Minutes</b></div>
                        <div style={{ backgroundColor: "darkgray" }}></div>
                        <div>6 Months</div>
                        <div>5 Weeks</div>
                        <div>5 Days</div>
                        <div>1 Day</div>
                        <div>2 Hours</div>

                        <div><b>1 Hour</b></div>
                        <div style={{ backgroundColor: "darkgray" }}></div>
                        <div>10 Months</div>
                        <div>2 Months</div>
                        <div>10 Days</div>
                        <div>2 Days</div>
                        <div>5 Hours</div>

                        <div><b>6 Hours</b></div>
                        <div style={{ backgroundColor: "darkgray" }}></div>
                        <div style={{ backgroundColor: "darkgray" }}></div>
                        <div style={{ backgroundColor: "darkgray" }}></div>
                        <div>2 Months</div>
                        <div>2 Weeks</div>
                        <div>1 Day</div>

                        <div><b>1 Day</b></div>
                        <div style={{ backgroundColor: "darkgray" }}></div>
                        <div style={{ backgroundColor: "darkgray" }}></div>
                        <div style={{ backgroundColor: "darkgray" }}></div>
                        <div style={{ backgroundColor: "darkgray" }}></div>
                        <div>8 Weeks</div>
                        <div>5 Days</div>

                    </div>
                    <Text variant='small'>This table is borrowed from <Link href='https://xkcd.com/1205/'>xkcd</Link></Text>
                </div>
            </div>

        </div >
    );
};