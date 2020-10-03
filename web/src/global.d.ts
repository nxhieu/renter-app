declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        PUBLIC_URL: string;
        SOURCE_LANGUAGE: 'string';
    }
}

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    const src: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default src;
}

declare module '*.module.css' {
    const css: { [key: string]: string };
    export default css;
}

declare module '*.css' {
    export default any;
}

declare module 'material-auto-rotating-carousel';

declare const __BROWSER__: boolean;
declare const __SERVER__: boolean;

interface Window {
    browserHistory: any;
    store: any;
    __PRELOADED_STATE__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    INITIAL_STATE: any;
}

declare module 'express-manifest-helpers';
