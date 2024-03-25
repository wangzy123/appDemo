import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 64px;
  line-height: 64px;
  border-radius: 12px;
  margin-top: 44px;
  padding: 0 24px;
  span{
    font-size: 24px;
  }

  .text{
    margin-left: 24px;
    span{
        margin-left: 12px;
        font-weight: 700;
    }
  }

`

export const TimeItem = () => {
  return (
    <Wrapper className='greyItemBg'>
        <span className="iconfont darkFont">&#xe600;</span>
        <span className="darkFont text">Estimated time: <span>20 seconds</span></span>
    </Wrapper>
  )
}
