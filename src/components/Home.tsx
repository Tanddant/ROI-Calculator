import * as React from 'react';
import { Text, mergeStyles, AnimationStyles } from '@fluentui/react';

export interface IHomeProps { }

export const Home: React.FunctionComponent<IHomeProps> = (props: React.PropsWithChildren<IHomeProps>) => {
    return (
        <>
            <div className={mergeStyles(AnimationStyles.slideDownIn20, { textAlign: 'center', maxWidth: "75%", margin: "auto" })}>
                Hello there 👋
                <br />
                <br />
                <Text variant='large'>Welcome to the ROI Calculator</Text>
                <Text>
                    <br />
                    This is a simple webpage to help you calculate if an investment in your next IT Project is worth it
                    <br />
                    Now full disclosure, I'm not a financial advisor, and I'm not a mathematician, actually I'm an IT consultant.
                    <br />
                    I simply made this out of curiosity and to help my client make better decisions.
                    <br />
                    What really pushed me was the announcement of Microsoft Copilot, and it being priced at USD $30/month/user, and trying to figure out if it was worth it.
                    <br />
                    In the navigation bar you can find a few different pages, that're essentially just different ways of seeing the ROI.
                    <br />
                    You can press the settings button in the top right corner to change the base values, such as how many days you work a year, and how many hours you work a day.
                    <br />
                    Hope you find it useful 🙌
                    <br />
                    - Dan
                </Text>
            </div>
        </>
    );
};