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
            <br />
            <Text>The original idea for this site stems from an very old xkcd meme that I would often refer to when thinking about building a script to automate a task, and I wanted everyone to be able to enjoy that, so here's a recreation!</Text>
            <br />
            <hr />

            <Text>How long can you work on making a routine task more efficient before you're spending more time than you save?</Text>
            <br />
            <br />

            <div className='TableWrapper'>
                <div style={{ textAlign: "center", writingMode: "vertical-lr", transform: "rotate(180deg)" }}> How much time you shave off</div>
                <div style={{ flexGrow: 1, maxWidth: "100%", overflowX: "auto" }}>
                    <div style={{ textAlign: "center" }}>How often you do the task</div>
                    <div className='Table' style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
                        <div className='Cell'></div>
                        <div className='Cell Header'>50/Day</div>
                        <div className='Cell Header'>5/Day</div>
                        <div className='Cell Header'>Daily</div>
                        <div className='Cell Header'>Weekly</div>
                        <div className='Cell Header'>Monthly</div>
                        <div className='Cell Header'>Yearly</div>

                        <div className='Cell Header'>1 Second</div>
                        <div className='Cell'>1 Day</div>
                        <div className='Cell'>2 Hours</div>
                        <div className='Cell'>30 Minutes</div>
                        <div className='Cell'>4 Minutes</div>
                        <div className='Cell'>1 Minute</div>
                        <div className='Cell'>5 Seconds</div>

                        <div className='Cell Header'>5 Seconds</div>
                        <div className='Cell'>5 Days</div>
                        <div className='Cell'>12 Hours</div>
                        <div className='Cell'>2 Hours</div>
                        <div className='Cell'>21 Minutes</div>
                        <div className='Cell'>5 Minutes</div>
                        <div className='Cell'>25 Seconds</div>

                        <div className='Cell Header'>30 Seconds</div>
                        <div className='Cell'>4 Weeks</div>
                        <div className='Cell'>3 Days</div>
                        <div className='Cell'>12 Hours</div>
                        <div className='Cell'>2 Hours</div>
                        <div className='Cell'>30 Minutes</div>
                        <div className='Cell'>2 Minutes</div>

                        <div className='Cell Header'>1 Minute</div>
                        <div className='Cell'>8 Weeks</div>
                        <div className='Cell'>6 Days</div>
                        <div className='Cell'>1 Day</div>
                        <div className='Cell'>4 Hours</div>
                        <div className='Cell'>1 Hour</div>
                        <div className='Cell'>5 Minutes</div>

                        <div className='Cell Header'>5 Minutes</div>
                        <div className='Cell'>9 Months</div>
                        <div className='Cell'>4 Weeks</div>
                        <div className='Cell'>6 Days</div>
                        <div className='Cell'>21 Hours</div>
                        <div className='Cell'>5 Hours</div>
                        <div className='Cell'>25 Minutes</div>

                        <div className='Cell Header'>30 Minutes</div>
                        <div className='Cell Inactive'></div>
                        <div className='Cell'>6 Months</div>
                        <div className='Cell'>5 Weeks</div>
                        <div className='Cell'>5 Days</div>
                        <div className='Cell'>1 Day</div>
                        <div className='Cell'>2 Hours</div>

                        <div className='Cell Header'>1 Hour</div>
                        <div className='Cell Inactive'></div>
                        <div className='Cell'>10 Months</div>
                        <div className='Cell'>2 Months</div>
                        <div className='Cell'>10 Days</div>
                        <div className='Cell'>2 Days</div>
                        <div className='Cell'>5 Hours</div>

                        <div className='Cell Header'>6 Hours</div>
                        <div className='Cell Inactive'></div>
                        <div className='Cell Inactive'></div>
                        <div className='Cell Inactive'></div>
                        <div className='Cell'>2 Months</div>
                        <div className='Cell'>2 Weeks</div>
                        <div className='Cell'>1 Day</div>

                        <div className='Cell Header'>1 Day</div>
                        <div className='Cell Inactive'></div>
                        <div className='Cell Inactive'></div>
                        <div className='Cell Inactive'></div>
                        <div className='Cell Inactive'></div>
                        <div className='Cell'>8 Weeks</div>
                        <div className='Cell'>5 Days</div>

                    </div>
                    <Text variant='small'>This table is borrowed from <Link href='https://xkcd.com/1205/'>xkcd</Link></Text>
                </div>
            </div>

        </div >
    );
};