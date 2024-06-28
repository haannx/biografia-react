import styled from "styled-components";
import Opcoes from "../opcoesheader";

const AppHeader = styled.div`
        background-color: #2e0f1e;
        display: flex;
        text-align: center;
        justify-content: center;
        height: 80px;
    }
`

function Header() {
    return (
        <AppHeader>
            <Opcoes/>
        </AppHeader>
    )
}

export default Header