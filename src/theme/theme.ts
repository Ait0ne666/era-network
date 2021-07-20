import {DefaultTheme} from 'styled-components';

type ThemesType = {
    'dark': DefaultTheme,
    'light': DefaultTheme
}


export const themes: ThemesType = {
    'dark': {
        palette: {
            background: {
                main: '#fff',
                accent: '#1B5CF5',
                primary: '#1B1919',
                secondary: '#FCE34C'
            },
            text: {
                main: '#000',
                accent: '#1B5CF5',
                primary: '#fff',
                secondary: '#FCE34C'
            }
        },
        style: {
            colors: {
                main: "FCE34C",
                accent: "1B5CF5",
                positive: "3DAA9D",
                negative: "FE5B37",
                disabled: "FDF1A5",
                mainGradient: {
                    start: "FDE539",
                    end: "FF5C00",
                },
                headers: "1B1919",
                mainText: "221F20",
                subtitle: "C4C4C4",
                bg: "FFFFFF",
                input : "EEEDF5",
                infoBg: "FF5C00",
                app: {
                    bg: "222222",
                    text: "FFFFFF",
                    subtitle: "C4C4C4",
                    textField: "313131",
                    infoBg: "FF5C00"
                }
            }
        }
    },
    'light': {
        palette: {
            background: {
                main: '#fff',
                accent: '#1B5CF5',
                primary: ' #1B1919',
                secondary: '#FCE34C'
            },
            text: {
                main: '#1B1919',
                accent: '#1B5CF5',
                primary: '#EEEDF5',
                secondary: '#FCE34C'
            }
        },
        style: {
            colors: {
                main: "FCE34C",
                accent: "1B5CF5",
                positive: "3DAA9D",
                negative: "FE5B37",
                disabled: "FDF1A5",
                mainGradient: {
                    start: "FDE539",
                    end: "FF5C00",
                },
                headers: "1B1919",
                mainText: "221F20",
                subtitle: "C4C4C4",
                bg: "FFFFFF",
                input : "EEEDF5",
                infoBg: "FF5C00",
                app: {
                    bg: "222222",
                    text: "FFFFFF",
                    subtitle: "C4C4C4",
                    textField: "313131",
                    infoBg: "FF5C00"
                }
            }
        }
    }
}