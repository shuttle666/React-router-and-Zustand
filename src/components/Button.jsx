import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  background: ${props => props.background || 'white'};
  padding: 10px 20px;
  border-radius: 5px;
  color: ${props => props.color || 'black'};
  text-decoration: none;
  cursor: pointer;
  user-select: none;
`

const Button = (props) => {
  return (
    <StyledButton {...props} />
  )
}

export default Button