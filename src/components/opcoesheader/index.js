import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"

const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0; /* Espaçamento do header */
`
const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0 20px; /* Espaçamento uniforme entre os itens */
  }
  a {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
  }
  a.active {
    color: #007bff;
  }
`
const textoOpcoes = ['Home', 'Tarefas']

function Opcoes() {
  const location = useLocation()

  return (
    <ContainerNav>
      <Nav>
        <ul>
          {textoOpcoes.map((opcao, index) => {
            let path = '/'
            if (opcao !== 'Home') {
              path = `/${opcao.toLowerCase()}`
            }
            return (
              <li key={index}>
                <Link
                  to={path}
                  className={location.pathname === path ? 'active' : ''}
                >
                  {opcao}
                </Link>
              </li>
            )
          })}
        </ul>
      </Nav>
    </ContainerNav>
  );
}

export default Opcoes
