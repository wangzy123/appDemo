import styled from 'styled-components';
import iconUrl from "../assets/image/deposit_10.png"
export const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  margin-top: 44px;
`
const SelectorTitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 26px;
  font-size: 22px;
  .titleLeft{
    font-size: 26px;
    font-weight: 700;
  }
  .titleAmount{
    margin-left: 12px;
    font-size: 24px;
    font-weight: 700;
  }
`
const SelectorBody = styled.div`
  display: flex;
  flex-direction: row;
  height: 114px;
  margin-top: 24px;
  margin-bottom: 16px;
  border: 1px solid #d5dae2;
  border-radius: 8px;
  .icon{
    display: inline-block;
    width: 118px;
    height: 114px;
    padding: 24px;
    background: url(${iconUrl}) center center no-repeat;
    border-right: 1px solid #d5dae2;
  }

  .selector{
    padding: 24px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    font-weight: 700;
    input{
      display:inline-block;
      height: 60px;
      padding: 0 16px;
      font-size: 26px;
      font-weight: 700;
      background-color: transparent;
      outline: none;
      border: none;
    }
    .smallText{
      margin-left: 12px;
      font-size: 22px;
      font-weight: 400;
    }
  }

`
const SelectorFooter = styled.div`
  display: flex;
  height: 44px;
  justify-content: flex-end;
  span{
    display: inline-block;
    margin-left: 22px;
    height: 44px;
    line-height: 44px;
    padding: 0 12px;
    font-size: 22px;
    border-radius: 8px;
    font-weight: 700;
  }
`


export const AmountSelector = () => {
  return (
    <SelectorWrapper>
      <SelectorTitle className="greyFont">
        <span className="titleLeft">Select amount</span>
        <span>Available<span className='titleAmount'>2 ATOM</span></span>
      </SelectorTitle>
      <SelectorBody>
        <span className="icon"></span>
        <div className="selector">
          <input className="darkFont" value={2}/>
          <span className="darkFont">ATOM <span className="greyFont smallText"> ≈ $1,013</span></span>
        </div>
      </SelectorBody>
      <SelectorFooter>
        <span className="greyFont optionBg">Max</span>
        <span className="greyFont optionBg">1/2</span>
        <span className="greyFont optionBg">1/3</span>
      </SelectorFooter>
    </SelectorWrapper>
  )
}
