import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            text: {
                main: string,
                accent: string,
                primary: string,
                secondary: string
            },
            background: {
                main: string,
                accent: string,
                primary: string,
                secondary: string
            },

        },
        style: {
            colors: {
                main:string,
                accent: string,
                positive: string,
                negative: string,
                disabled: string,
                mainGradient: {
                    start: string,
                    end: string,
                },
                headers: string,
                mainText: string,
                subtitle: string,
                bg: string,
                input : string,
                infoBg: string,
                app: {
                    bg: string,
                    text: string,
                    subtitle: string,
                    textField: string,
                    infoBg: string
                }
            }
        }
    }
  }