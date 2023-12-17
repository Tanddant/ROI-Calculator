import * as React from 'react';
import { Text, mergeStyles, AnimationStyles, Link, Icon } from '@fluentui/react';

export interface IHomeProps { }

export const Home: React.FunctionComponent<IHomeProps> = (props: React.PropsWithChildren<IHomeProps>) => {
    return (
        <>
            <div className={mergeStyles(AnimationStyles.slideDownIn20, { margin: "auto", padding: "1em" })}>
                <Text variant="xxLarge">Hello there!</Text>
                <br />
                <br />
                <Text variant='large'>Welcome to my little hobby project 🙌 </Text>
                <br />
                <br />

                <Text>
                    The goal of this website is not to create the most advanced ROI calculator ever,
                    nor was it to create a tool that businesses should rely on.
                    <br />
                    <br />

                    Instead I simply wanted to create "the tool I need", and with some inspiration from <Link href='https://xkcd.com/1205/' target='_blank'>xkcd </Link>
                    and a session at ESPC by <Link href='https://twitter.com/ChrisO_Brien' target='_blank'>Chris O'Brien</Link> talking about Microsoft Copilot, and the return on investment there.
                    <br />
                    <br />

                    I decided to spend a weekend building this little site, that groups together some of the visualization/calculations that I like to use when I'm trying to figure out if a project is worth it.

                    <br />
                    <br />

                    You can edit all the variables that are used in the calculations, on the top right of the page, you'll see a <Icon iconName='settings' />-button, press that and you're off to the races.
                </Text>
                <br />
                <br />
                <Text variant='large'>I hope you find some use in the tools<br />- Dan 👋</Text>

                <br />
                <br />
                <Text variant='small'>PS - Beware that I'm just a dumb developer, not a financial advisor, so take everything here with a grain of salt</Text>
            </div>
        </>
    );
};