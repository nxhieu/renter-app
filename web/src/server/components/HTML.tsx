import * as React from 'react';

type Props = {
    children: any;
    css: string[];
    materialuicss: string;
    helmetContext: any;
    scripts: string[];
    state: string;
};

const HTML = ({
    children,
    css = [],
    materialuicss,
    scripts = [],
    state = '{}',
    helmetContext: { helmet },
}: Props) => {
    return (
        <html lang="">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {helmet.base.toComponent()}
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
                {helmet.script.toComponent()}
                <style id="jss-server-side">${materialuicss}</style>
                {css.filter(Boolean).map((href) => (
                    <link key={href} rel="stylesheet" href={href} />
                ))}

                <script
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        // TODO: Add jsesc/stringify here
                        // see: https://twitter.com/HenrikJoreteg/status/1143953338284703744
                        __html: `window.INITIAL_STATE = ${state}`,
                    }}
                />
            </head>
            <body>
                {/* eslint-disable-next-line react/no-danger */}
                <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
                {scripts.filter(Boolean).map((src) => (
                    <script key={src} src={src} />
                ))}
            </body>
        </html>
    );
};

export default HTML;
