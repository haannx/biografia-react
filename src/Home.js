import React, { useState } from 'react'
import styled from 'styled-components'
import minhaImg from './components/imagens/eu.png'
import IconesImg from './components/opcoescontato'


const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #17080f;
  align-items: center;
  justify-content: space-around;
  display: flex;
  position: relative;
`
const SobreMim = styled.div`
  position: absolute;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 60%;
  top: 12%;
  background-color: rgba(255, 255, 255, 0.029);
  border-radius: 75px;
  display: flex;
  text-align: center;
  border: 6px solid transparent;
`
const Titulo = styled.h2`
  color: white;
  margin-top: -22%;
  margin-left: -17%;
  position: absolute;
`
const TextoDiv = styled.div`
  width: 68%;
  height: 60%;
  margin-left: 28%;
  text-align: center;
  color: white;
  font-size: 100%;
`
const Foto = styled.img`
  position: absolute;
  margin-left: -65%;
  width: 25%;
  border-radius: 220px;
`
const Botao = styled.button`
  position: absolute;
  bottom: 13%;
  padding: 10px 20px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ff4500;
  }
`
const Detalhes = styled.div`
  border: 10px solid transparent;
  position: absolute;
  top: 85%;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  color: white;
  text-align: left;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.5s ease, max-height 0.5s ease;
  &.visible {
    opacity: 1;
    max-height: 500px;
  }
`
const Contatos = styled.h3`
  margin-left: 4%;
  position: absolute;
`

function App() {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)
  const [detalhesVisiveis, setDetalhesVisiveis] = useState(false)

  const toggleDetalhes = () => {
    if (detalhesVisiveis) {
      setMostrarDetalhes(false)
      setTimeout(() => setDetalhesVisiveis(false), 55)
    } else {
      setDetalhesVisiveis(true)
      setTimeout(() => setMostrarDetalhes(true), 40)
    }
  };

  return (
    <AppContainer>
      <>
      <SobreMim>
        <Foto src={minhaImg} />
        <Titulo>Óla me chamo Vinícios!</Titulo>
        <TextoDiv>
          <p>
            Sou estudante de Análise e desenvolvimento de Sistemas, estou sempre buscando evoluir e ampliar meus conhecimentos de diversas formas. 
            Além da Faculdade em andamento, amplio meus conhecimentos com cursos da Alura sempre focando no desenvolvimento de software e programação no geral. 
            No momento não possuo projetos muito ambiciosos por conta da minha falta de tempo, mas aos poucos pretendo incrementar essa página com alguns de meus projetos.
          </p>
          <Contatos>Contatos:</Contatos>
          <IconesImg/>
          </TextoDiv>
        <Botao onClick={toggleDetalhes}>
          {detalhesVisiveis ? 'Ver menos' : 'Saber mais'}
        </Botao>
      </SobreMim>
      <Detalhes className={detalhesVisiveis ? 'visible' : ''}>
        <h3>Minhas Habilidades:</h3>
        <img 	src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'/>
        <img 	src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'/>
        <img 	src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'/>
        <img 	src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'/>
        <img 	src='https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white'/>
        <p>Adquiri conhecimentos sólidos em todas as linguagens citadas acima, durante minha formação em Análise e Desenvolvimento de Sistemas, cursos Alura e aulas no Youtube.
        Em caso de dúvida, tenho certificados de alguns cursos no meu Linkedin.
        </p>
        <h3>Experiências:</h3>
        <p>Além da lógica e programação de algoritmos, tive algumas experiências nos seguintes: <br/><br/>Java;<br/>Python;<br/>Banco de dados MySQL;<br/>WireFrames;<br/>React DOM,
        React Routes, React Styled-Components.</p>
        <h3>Formação:</h3>
        <p>Ensino Médio Completo - 2022 - Barão do Rio Branco;<br/>Graduação em Análise e Desenvolvimento de Sistemas - 2023/2027 - UNINTER;<br/>Inglês Intermediário ao avançado.</p>
      </Detalhes>
      </>
    </AppContainer>
  );
}

export default App


