import styled from "styled-components";
import SectionBackground from '../../assets/SidebarBackground.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`

export const SideContainer = styled.div`
  background-color: ${({theme}) => theme.color.grey};
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8vh 5vh;
  background-image: url(${SectionBackground});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: right;
`

export const Select = styled.select`
  width: 75%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Logo = styled.img``

export const MainTitle = styled.h1`
  color: ${({theme}) => theme.color.white};
`

export const ResultsContainer = styled.div`
  background-color: ${({theme}) => theme.color.grey};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SectionWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Text = styled.p`
  color: ${({theme}) => theme.color.white};
`

export const SectionValue = styled(Text)`
`

export const LotteryWrapper = styled(Wrapper)`
  gap: 35px;
`

export const LotteryNumber = styled.div`
  background-color: ${({theme}) => theme.color.white};
  color: ${({theme}) => theme.color.black};
  border-radius: 50%;
  padding: 3vh;
`

export const InfoFooter = styled.p`
  position:absolute;
  color: ${({theme}) => theme.color.black};
  font-size: 16px;
  bottom: 10vh;
`
