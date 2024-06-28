import React, { useState } from 'react'
import styled from 'styled-components'
import maisImg from '../imagens/mais.png'

const Explicacao = styled.p`
    text-align: center;
    color: #fff;
`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    justify-content: space-around;
    position: relative;
`
const TarefaContainer = styled.div`
    width: 90%;
    height: 280px;
    background-color: rgba(255, 255, 255, 0.029);
    border-radius: 75px;
    margin-left: 4%;
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;    
`
const BotaoCriarMeta = styled.button`
    width: 135px;
    height: 135px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 30px;
    border: 3px solid transparent;
    margin: 4.5%;
    margin-left: -65%;    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    
    img {
        width: 50px;
        height: 50px;
    }
    &:hover {
        cursor: pointer;
    }
`
const TextoCriarMeta = styled.p`
    color: #000;
    margin-top: 6%;
    margin-left: -69.5%;
    font-weight: bold;
    position: absolute;
    flex-wrap: wrap;
    align-items: center;
    
    &:hover {
        cursor: pointer;
    }
`
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalConteudo = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Botao = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 15px;
`
const ListaMetas = styled.div`
    width: 100%;
    max-width: 500px;
    margin-top: 20px;
`
const ItemMeta = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background: white;
    margin-left: 20px;
`
const NomeMeta = styled.span`
    font-size: 18px;
    font-weight: bold;
`
const DiasMeta = styled.span`
    margin-top: 5px;
    font-size: 14px;
`
const AcoesMeta = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`
const BotaoConcluir = styled(Botao)`
    background-color: #399d36;
    color: white;
    border: 0px;
    &:hover {
        background-color: darkgreen;
    }
`
const BotaoCancelar = styled(Botao)`
    background-color: #ff0404;
    color: white;
    border: 0px;

    &:hover {
        background-color: darkred;
    }
`

function Tarefas() {
    const [mostrarModal, setMostrarModal] = useState(false)
    const [metas, setMetas] = useState([])

    const abrirModal = () => setMostrarModal(true)
    const fecharModal = () => setMostrarModal(false)

    const adicionarMeta = (meta) => {
        setMetas([...metas, meta])
        fecharModal()
    };

    const concluirMeta = (index) => {
        const novasMetas = [...metas]
        novasMetas.splice(index, 1)
        setMetas(novasMetas)
    };

    const cancelarMeta = (index) => {
        const novasMetas = [...metas]
        novasMetas.splice(index, 1)
        setMetas(novasMetas)
    };

    return (
        <>
            <Explicacao>Apenas uma de minhas experiências, para criar telas animadas com funções de adição</Explicacao>
            <Container>
            <TarefaContainer>
                <BotaoCriarMeta onClick={abrirModal}>
                    <img src={maisImg} alt="Criar Meta"/>
                </BotaoCriarMeta>
                <TextoCriarMeta>Criar Meta</TextoCriarMeta>
            </TarefaContainer>
            {mostrarModal && <ModalMeta onClose={fecharModal} onAddMeta={adicionarMeta} />}
            <ListaMetas>
                {metas.map((meta, index) => (
                    <ItemMeta key={index}>
                        <NomeMeta>{meta.name}</NomeMeta>
                        <DiasMeta>Restam {meta.daysLeft} dias</DiasMeta>
                        <AcoesMeta>
                            <BotaoConcluir onClick={() => concluirMeta(index)}>Concluir</BotaoConcluir>
                            <BotaoCancelar onClick={() => cancelarMeta(index)}>Cancelar</BotaoCancelar>
                        </AcoesMeta>
                    </ItemMeta>
                ))}
            </ListaMetas>
            </Container>
        </>
    );
}

const ModalMeta = ({ onClose, onAddMeta }) => {
    const [nome, setNome] = useState('')
    const [dias, setDias] = useState(0)

    const handleSubmit = () => {
        onAddMeta({ name: nome, daysLeft: dias })
    };

    return (
        <ModalOverlay>
            <ModalConteudo>
                <h2>Criar Meta</h2>
                <label>
                    Nome da Meta:<br/>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
                </label>
                <label>
                    Dias para Concluir:
                    <input type="number" value={dias} onChange={(e) => setDias(Number(e.target.value))}/>
                </label>
                <Botao onClick={handleSubmit}>Adicionar Meta</Botao>
                <Botao onClick={onClose}>Cancelar</Botao>
            </ModalConteudo>
        </ModalOverlay>
    );
};

export default Tarefas;


