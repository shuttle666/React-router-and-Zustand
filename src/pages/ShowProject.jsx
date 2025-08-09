import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { url } from "../data/db.json"
import NoMatch from './404'

const Container = styled.iframe`
  width: 100dvw;
  height: 100dvh;

  background: white;
  display: grid;
  place-items: center;
  place-content: center;
`



const ShowProject = () => {
  const {id} = useParams()
  const link = url[id - 1]

  return (
    link ? <Container src={link} /> : <NoMatch />
  )
}

export default ShowProject