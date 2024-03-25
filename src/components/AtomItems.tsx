import styled from 'styled-components';
import { AtomItem } from './AtomItem';

const Items = styled.div`
  display: flex;
  justify-content: space-around;
`
const ArrowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 132px;
    flex: 1;
    .arrowInner{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 86px;
      .arrow{
        display: inline-block;
        width: 24px;
        height: 24px;
        font-size: 24px;
      }
    }
`

export const AtomItems = () => {
    return (
        <Items>
          <AtomItem type={1} title="From Cosmos Hub" text="atom1xy5y...m6wwz9a"></AtomItem>
          <ArrowWrapper>
            <div className='arrowInner'>
              <span className="arrow iconfont greyFont">&#xe60d;</span>
            </div>
          </ArrowWrapper>
          <AtomItem type={0} title="To Osmosis" text="osmo1xy5y...w9a"></AtomItem>
        </Items>
    )
  }