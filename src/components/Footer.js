import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl} 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const FooterSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const FooterTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.secondary};
`;

const FooterLink = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  margin-bottom: ${props => props.theme.spacing.sm};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const FooterText = styled.p`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.spacing.xl};
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>iSpy-AI</FooterTitle>
          <FooterText>
            An AI-powered I Spy game that brings the classic children's game into the future with
            advanced object recognition and fun gameplay.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/features">Features</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>
            Questions or feedback? <FooterLink href="mailto:support@ispy-ai.app">support@ispy-ai.app</FooterLink>
          </FooterText>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} iSpy-AI. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
