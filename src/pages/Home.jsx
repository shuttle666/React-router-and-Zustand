import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSystemStore, useAppStore } from '../data/state'

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    ${props => props.theme === 'dark' ? '#1a1a1a 0%, #2d2d2d 100%' : '#f8fafc 0%, #e2e8f0 100%'});
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#1f2937'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`

const Card = styled.div`
  background: ${props => props.theme === 'dark' ? 'rgba(45, 45, 45, 0.8)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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