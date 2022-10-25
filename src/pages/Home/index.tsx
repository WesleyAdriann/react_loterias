import React, { FC } from "react";
import { Container, InfoFooter, Logo, LotteryNumber, LotteryWrapper, MainTitle, ResultsContainer, SectionValue, SectionWrapper, Select, SideContainer, Text, Wrapper } from "./style";
import logo from '../../assets/Logo.svg'

const Home: FC = () => {
  const options = [
    'Mega-Sena',
    'Quina',
    'Lotofacil',
    'LotoMania',
    'TimeMania',
    'Dia de Sorte'
  ]
  return (
    <>
      <Container>
        <SideContainer>
          <Select list="optionsList"/>
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
      <datalist id="optionsList">
        {options.map((option) => (<option key={option} value={option} />))}
      </datalist>
    </>
  );
};

export default Home;
