import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSystemStore, useAppStore } from '../data/state'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme === 'dark' ? "black" : "white"};
  color: ${props => props.theme === 'dark' ? "white" : "black"};
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

const Home = () => {
  const theme = useSystemStore(state => state.SystemState.theme)

  const SwitchTheme = useSystemStore(state => state.SwitchTheme)

  const AppType = useAppStore(state => state.AppState.AppList[0].type)
  const appTypeName = useAppStore(state => state.AppState.AppList[0].name)
  const SwitchAppType = useAppStore(state => state.SwitchAppType)

  // console.log(SwitchTheme)
  return (
    <Container theme={theme}>
      <h1>Home</h1>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink as='div' onClick={SwitchTheme}>Theme:{theme}</StyledLink>
      <StyledLink as="div" onClick={SwitchAppType}>AppType: {appTypeName}</StyledLink>

      <AppType color="blue">TEST</AppType>
    </Container>
  )
}

export default Home