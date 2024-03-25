import styled from 'styled-components';
import {AtomItems} from './AtomItems';
import { AmountSelector } from './AmountSelector';
import { TimeItem } from './TimeItem';
export const ContentWrapper = styled.div`
  padding-top: 62px;
  height: 588px;
`


export const Content = () => {
  return (
    <ContentWrapper>
      <AtomItems></AtomItems>
      <AmountSelector></AmountSelector>
      <TimeItem></TimeItem>
    </ContentWrapper>
  )
}
