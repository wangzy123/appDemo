import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 52px;
    display: flex;
    justify-content:space-between;
    font-size: 38px;
    line-height: 54px;
    span.closeIcon {
      width: 52px;
      height: 52px;
      font-size: 24px;
      text-align: center;
      border-radius: 12px;
      cursor: pointer;
    }
`

export const Header = () => {
  return (
    <HeaderWrapper className="darkFont">
      <span>Deposit ATOM</span>
      <span className='closeIcon iconfont colseBtnBg'>&#xe685;</span>
    </HeaderWrapper>
  )
}
