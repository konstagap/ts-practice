import { style } from './style';
import { contrast, fontColors } from './model';
console.log('colors:');
style.color('red')('red text');
style.color('green')('green text');
style.color('blue')('blue text');
console.log('\nall colors:');
const isColor = name => fontColors.hasOwnProperty(name);
const colorList = Object.keys(fontColors).filter(isColor);
console.log(
    Array.from('Message of all colors')
        .map((char, i) => {
            const font = colorList[i % colorList.length];
            return style(char, { font, background: contrast[font] });
        })
        .join(''),
);
console.log('\neffects:');
style.log('underline red message', { font: 'red', effects: ['underscore'] });
style.log('bright cyan message', { font: 'cyan', effects: ['bright'] });
console.log('\nmarkdown:');
style.log('bold', { bold: true });
style.log('italic', { italic: true });
style.log('monospace', { mono: true });
console.log(`
Подсветка синтаксиса markdown как в редакторах:
${style('жирный', { bold: true })} текст
${style('наклонный', {
    italic: true,
})} текст
моноширинный — ${style(`console.log(style('monospace', { mono: true }));`, {
    mono: true,
})}
ссылка ${style('Yandex', { link: 'https://yandex.ru' })}
${style('цитата', { blockquote: true })}
${style('много\nстрочная\nцитата', { blockquote: true })}
`);
