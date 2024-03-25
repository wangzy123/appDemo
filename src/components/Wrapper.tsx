import styled from 'styled-components';
import {ThemeType} from '../theme/theme';
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';
type Props = {
    theme: ThemeType;
    width: string;
    height: string;
    borderRadius: string;
}
export const WrapperInner = styled.div<any>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--width);
    height: var(--height);
    background-color: var(--bgColor);
    border-radius: var(--borderRadius);
    padding: 1.75rem;
    .darkFont {
        color: var(--darkFontColor)
    }
    .greyFont {
        color: var(--greyFontColor)
    }
    .lightFont {
        color: var(--lightFontColor)
    }

    .greyItemBg {
        background-color: var(--greyItemBgColor)
    }
    .optionBg {
        background-color: var(--optionBgColor)
    }
    .colseBtnBg{
        background-color: var(--closeBtnColor)
    }
    .transferBg{
        background-color: var(--transferBgColor)
    }
`
export const Wrapper=(props:Props)=>{
    return(
        <WrapperInner style={{
            '--width': props.width,
            '--height': props.height,
            '--bgColor': props.theme.colors.bgColor,
            '--borderRadius': props.borderRadius,
            '--darkFontColor': props.theme.colors.darkFontColor,
            '--greyFontColor': props.theme.colors.greyFontColor,
            '--lightFontColor': props.theme.colors.lightFontColor,
            '--greyItemBgColor': props.theme.colors.greyItemBgColor,
            '--optionBgColor': props.theme.colors.optionBgColor,
            '--closeBtnColor': props.theme.colors.closeBtnColor,
            '--transferBgColor': props.theme.colors.transferBgColor,
        }}>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </WrapperInner>
    )
}
