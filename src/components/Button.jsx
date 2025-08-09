import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  background: ${props => props.variant === 'primary' ? '#3b82f6' : 'transparent'};
  border: 2px solid ${props => props.variant === 'primary' ? '#3b82f6' : '#e5e7eb'};
  padding: 12px 24px;
  border-radius: 8px;
  color: ${props => props.variant === 'primary' ? 'white' : '#374151'};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    background: ${props => props.variant === 'primary' ? '#2563eb' : '#f9fafb'};
  }
  
  &:active {
    transform: translateY(0);
  }
`

const Button = ({ variant = 'secondary', children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button