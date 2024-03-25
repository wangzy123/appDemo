
export enum ThemeMode {light, dark}
export type ThemeColors = {
    bgColor: string,
    darkFontColor: string,
    greyFontColor: string,
    lightFontColor: string,
    greyItemBgColor: string,
    optionBgColor: string,
    transferBgColor: string,
    closeBtnColor: string,
}
export const theme_colors:ThemeType[] = [
    {
        name: 'light',
        colors: {
            bgColor: '#fff',
            darkFontColor: '#2c3136',
            greyFontColor: '#697584',
            lightFontColor: '#fff',
            greyItemBgColor: '#eef2f8',
            optionBgColor: '#eef2f8',
            transferBgColor: '#2d3137',
            closeBtnColor: 'transparent',
        }
    },
    {
        name: 'dark',
        colors: {
            bgColor: '#212528',
            darkFontColor: '#fff',
            greyFontColor: '#697584',
            lightFontColor: '#2c3136',
            greyItemBgColor: '#141417',
            optionBgColor: '#2b3138',
            transferBgColor: '#fff',
            closeBtnColor: '#2b3138',
        }
    }
]

export type ThemeType = {
    name: string,
    colors: ThemeColors
}