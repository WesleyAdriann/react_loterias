import React, { FC } from "react";
import { Container, InfoFooter, Logo, LotteryNumber, LotteryWrapper, MainTitle, ResultsContainer, SectionValue, SectionWrapper, Select, SideContainer, Text, Wrapper } from "./style";
import logo from '../../assets/Logo.svg'

const Home: FC = () => {
  return (
    <Container>
      <SideContainer>
        <Select/>
        <Wrapper>
          <Logo src={logo} />
          <MainTitle>MegaSena</MainTitle>
        </Wrapper>
        <SectionWrapper>
          <Text>
            Concurso
          </Text>
          <SectionValue>
            4531-07/04/2020
          </SectionValue>
        </SectionWrapper>
      </SideContainer>
      <ResultsContainer>
        <LotteryWrapper>
          {Array(6).fill(12).map((value: number, index: number) => (
            <LotteryNumber key={index}>{value}</LotteryNumber>
          ))
          }
        </LotteryWrapper>
        <InfoFooter>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</InfoFooter>
      </ResultsContainer>
    </Container>
  );
};

export default Home;
