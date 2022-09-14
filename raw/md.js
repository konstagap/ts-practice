import { color } from './colors';
export const mdOptionsList = ['bold', 'italic', 'mono', 'link', 'blockquote'];
export function markdown(text, options) {
    let result = text;
    if (options) {
        if (options.bold) {
            result = color(`**${result}**`, { font: 'yellow', effects: ['bright'] });
        }
        if (options.italic) {
            result = color(`_${result}_`, { font: 'magenta', effects: ['italic'] });
        }
        if (options.mono) {
            result = color(`\`${result}\``, { font: 'green' });
        }
        if (options.link) {
            result = `[${result}](${color(options.link, { font: 'blue', effects: ['underscore'] })})`;
        }
        if (options.blockquote) {
            result = color(`> ${result.replace(/\n/g, '\n> ')}`);
        }
    }
    return result;
}
