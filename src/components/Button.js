import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-family: ${props => props.theme.fonts.main};
  font-weight: 600;
  font-size: 1rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  
  ${props => props.primary && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border: none;
    
    &:hover {
      background-color: ${props => props.theme.colors.primary}dd;
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.medium};
    }
  `}
  
  ${props => props.secondary && css`
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.dark};
    border: none;
    
    &:hover {
      background-color: ${props => props.theme.colors.secondary}dd;
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.shadows.medium};
    }
  `}
  
  ${props => props.outline && css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
    
    &:hover {
      background-color: ${props => props.theme.colors.primary}11;
      transform: translateY(-2px);
    }
  `}
  
  ${props => props.large && css`
    padding: 1rem 2rem;
    font-size: 1.1rem;
  `}
  
  ${props => props.small && css`
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  `}
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

export default Button;
