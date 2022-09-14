import { backgroundColors, effects, fontColors, IColor, IEffect, Reset } from './model';

function addColor(text: string, color: IColor, isBackground = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}

function getEffects(effectList: IEffect[]) {
    return effectList.map(effect => effects[effect]).join('');
}

export type IColorOptions = {
    font?: IColor;
    background?: IColor;
    effects?: IEffect[];
};

export function color(text: string, options?: IColorOptions): string {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
