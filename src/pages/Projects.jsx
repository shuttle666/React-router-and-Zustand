import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { url } from "../data/db.json"

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;

  background: white;
  display: grid;
  place-items: center;
  place-content: center;
`

const Button = styled(Link)`
  background: black;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  display: block;
`

const Projects = () => {
  return (
    <Container>
      <h1>Projects:</h1>
      <ul>
        {
          url.map((link,i) => (
            <li key={i}>
              <Button to={`/projects/${i + 1}`}>{link}</Button>
              <br />
            </li>
          ))
        }
      </ul>

      <Button to="/" children = "Back to Home"/>
    </Container>
  )
}

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;
`

const ProjectCard = styled(Link)`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: #374151;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  border: 1px solid #e5e7eb;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: #3b82f6;
  }
`

export default Projects