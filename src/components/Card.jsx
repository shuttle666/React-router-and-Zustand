import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSystemStore, useAppStore } from '../data/state'

const Container = styled.div`
  width: 300px;
  height: 200px;
  background: ${props => props.theme === 'dark' ? "black" : "white"};
  color: ${props => props.color || "white"};
  display: grid;
  place-items: center;
  place-content: center;
`

const StyledLink = styled(Link)`
  background: white;
  padding: 10px 20px;
  border-radius: 5px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
`

export default function Card(props) {
  const theme = useSystemStore(state => state.SystemState.theme)
  const SwitchTheme = useSystemStore(state => state.SwitchTheme)

  return (
    <Container theme={theme} {...props}>
      <h1>{theme}</h1>
      <StyledLink as="div" children="Switeh Theme" onClick={SwitchTheme}/>
    </Container>
  )
}