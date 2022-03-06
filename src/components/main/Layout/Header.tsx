import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    background-color: #ff970fb7;
`
const Title = styled.h1`
    font-size:48px;
`
const Button = styled.button`
  
`;


function Header() {
  return (
    <Wrap>
        <Title>Добро пожаловать в новостную ленту! </Title>
        <Button onClick={()=>{}}>
            Загрузить новости
        </Button>
    </Wrap>
  )
}

export default Header