import { color } from './colors';
import { markdown, mdOptionsList } from './md';
import { colors } from './model';
function isMarkdownOptions(options) {
    return mdOptionsList.some(key => key in options);
}
function styleImpl(text, options) {
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
const colorsObj = new Map(colors.map(color => [color, text => console.log(style(text, { font: color }))]));
export const style = Object.assign(styleImpl, {
    log: (text, options) => {
        console.log(style(text, options));
    },
    color: x => {
        const log = colorsObj.get(x);
        return log || console.log;
    },
});
