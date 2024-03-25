import styled from 'styled-components';
import inputIcon from '../assets/image/inputIcon.png';
import outputIcon from '../assets/image/outputIcon.png';
export const AtomWrapper = styled.div`
  width: 346px;
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .atomTitle {
    font-size: 22px;
    font-weight: 700;
  }
  .item {
    width: 100%;
    height: 86px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    .icon{
      width: 46px;
      height: 46px;
    }
    .text{
      display:inline-block;
      flex: 1;
      height: 40px;
      line-height:40px;
      font-size: 24px;
      margin: 0 1rem;
    }
    .button{
      width: 24px;
      width: 24px;
      font-size: 24px;
      cursor: pointer;
    }
  }
`


export enum AtomItemType {output, input}

type AtomItemProps = {
  type: AtomItemType;
  title: string;
  text: string;
}

export const AtomItem = (props: AtomItemProps) => {
  const { type, title, text } = props;
  return (
    <AtomWrapper>
      <div className='atomTitle greyFont'> {title} </div>
      <div className='greyItemBg item'>
        {type === AtomItemType.input && <img className="icon" src={inputIcon} alt="input icon"/>}
        {type === AtomItemType.input && <span className='text greyFont'>{text}</span>}
        {type === AtomItemType.output && <img className="icon" src={outputIcon} alt="output icon"/>}
        {type === AtomItemType.output && <span  className='text greyFont'>{text}</span>}
        {type === AtomItemType.output  && <span className="iconfont greyFont button">&#xe601;</span> }
      </div>

    </AtomWrapper>
  )
}
