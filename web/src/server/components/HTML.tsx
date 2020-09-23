import * as React from 'react';

type Props = {
    children: any;
    css: string[];
    helmetContext: any;
    scripts: string[];
    state: string;
};

const HTML = ({
    children,
    css = [],
    scripts = [],
    state = '{}',
    helmetContext: { helmet },
}: Props) => {
    console.log(state);
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
                {css.filter(Boolean).map((href) => (
                    <link key={href} rel="stylesheet" href={href} />
                ))}
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
                    integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
                    crossOrigin="anonymous"
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossOrigin="anonymous"
                />
                <script
                    src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
                    integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
                    crossOrigin="anonymous"
                />
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
