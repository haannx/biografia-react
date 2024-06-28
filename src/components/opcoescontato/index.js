import styled from 'styled-components'
import Instagram from '../imagens/instagram.png'
import Whatsapp from '../imagens/whatsapp.png'
import Github from '../imagens/github.png'
import Linkedin from '../imagens/linkedin.png'
import { useState } from 'react'

const IconesContainer = styled.div`
    left: 43%;
    position: absolute;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
`
const Opcoes = styled.li`
    margin-right: 30px;
    cursor: pointer;
    color: #fff;
    position: relative;
`
const ImgsF = styled.img`
    width: 35px;
`
const Detalhes = styled.div`
  position: absolute;
  top: -13%;
  left: -140%;
  transform: translateX(-50%);
  width: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0px;
  margin-left: 200px;
  border-radius: 5px;
  text-align: center;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s;
`

const opcoesContato = [
  { src: Instagram, link: 'https://www.instagram.com/viniciosbohnn/' },
  { src: Linkedin, link: 'https://www.linkedin.com/in/viniciosbohn/' },
  { src: Github, link: 'https://github.com/haannx' },
  { src: Whatsapp, link: '' }
];

function IconesImg() {
  const [mostrarNumero, setMostrarNumero] = useState(false);

  const toggleMostrarNumero = () => {
    setMostrarNumero(!mostrarNumero)
  };

  return (
    <IconesContainer>
      <Icones>
        {opcoesContato.map((opcao, index) => (
          <Opcoes key={index}>
            {opcao.link ? (
              <a href={opcao.link} target="_blank" rel="noopener noreferrer">
                <ImgsF src={opcao.src} alt={`Icone ${index + 1}`} />
              </a>
            ) : (
              <div onClick={toggleMostrarNumero}>
                <ImgsF src={opcao.src} alt={`Icone ${index + 1}`} />
                <Detalhes isVisible={mostrarNumero}>
                  <p>+55 55 9 9612-1887</p>
                </Detalhes>
              </div>
            )}
          </Opcoes>
        ))}
      </Icones>
    </IconesContainer>
  )
}

export default IconesImg
