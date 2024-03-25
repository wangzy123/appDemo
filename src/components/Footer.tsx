import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  height: 176px;
  margin-top: 16px;
  div:first-child {
    height: 110px;
    line-height: 110px;
    text-align: center;
    border-radius: 12px;
    font-size: 32px;
    cursor: pointer;
  }
  div:last-child {
    height: 66px;
    text-align: center;
    line-height: 66px;
    font-size: 28px;
    cursor: pointer;
  }
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className='transferBg lightFont'>Transfer</div>
      <div className='greyFont'>Cancel</div>
    </FooterWrapper>
  )
}
