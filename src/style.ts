import { color, IColorOptions } from './colors';
import { IMDoptions, markdown, mdOptionsList } from './md';
import { colors, IColor } from './model';

type IOptions = IColorOptions | IMDoptions;

function isMarkdownOptions(options: IOptions): options is IMDoptions {
    return mdOptionsList.some(key => key in options);
}

function styleImpl(text: string, options: IOptions) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if (isMarkdownOptions(options)) {
        return markdown(text, options);
    }
    return text;
}

const colorsObj = new Map(colors.map(color => [color, (text: string) => console.log(style(text, { font: color }))]));

export const style = Object.assign(styleImpl, {
    log: (text: string, options: IOptions) => {
        console.log(style(text, options));
    },
    color: (x: IColor) => {
        const log = colorsObj.get(x);
        return log || console.log;
    },
});
