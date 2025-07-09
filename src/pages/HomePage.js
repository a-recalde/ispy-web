import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import AppMockup from '../assets/images/app-mockup';
import AppleLogo from '../assets/images/apple-logo';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xxl} 0;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: left;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 600px;
  text-align: left;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.dark};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.medium};
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

const FeatureTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.dark};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.dark};
`;

const CTASection = styled.section`
  background-color: ${props => props.theme.colors.light};
  padding: ${props => props.theme.spacing.xxl} 0;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.dark};
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroTextContent = styled.div`
  flex: 1;
  padding-right: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding-right: 0;
    padding-bottom: ${props => props.theme.spacing.xl};
  }
`;

const HeroImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: perspective(800px) rotateY(-10deg) rotateX(10deg);
  transition: transform 0.5s ease;
  
  &:hover {
    transform: perspective(800px) rotateY(-5deg) rotateX(5deg);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: ${props => props.theme.spacing.xl};
  }
`;

const HomePage = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTextContent>
            <HeroTitle>A New Take on I Spy</HeroTitle>
            <HeroSubtitle>
              An AI-powered I Spy game that brings the classic children's game into the future with
              advanced object recognition and fun gameplay.
            </HeroSubtitle>
            <ButtonGroup>
              <Button as="a" href="https://apps.apple.com/app/ispy-ai" target="_blank" rel="noopener noreferrer" primary large>
                <AppleLogo /> Download Now
              </Button>
              <Button as={Link} to="/features" outline large>
                Learn More
              </Button>
            </ButtonGroup>
          </HeroTextContent>
          <HeroImageContent>
            <AppMockup />
          </HeroImageContent>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionContent>
          <SectionTitle>How It Works</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>📸</FeatureIcon>
              <FeatureTitle>Take a Photo</FeatureTitle>
              <FeatureDescription>
                Snap a picture of any scene around you with your device's camera.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🔍</FeatureIcon>
              <FeatureTitle>AI Analyzes</FeatureTitle>
              <FeatureDescription>
                Our advanced AI identifies objects and creates clever clues about them.
              </FeatureDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🎮</FeatureIcon>
              <FeatureTitle>Play Together</FeatureTitle>
              <FeatureDescription>
                Friends guess the object based on the AI-generated clue.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </SectionContent>
      </Section>

      <CTASection>
        <SectionContent>
          <CTATitle>Ready to Play?</CTATitle>
          <CTAText>
            Download iSpy-AI today and start playing the classic game with a modern twist!
          </CTAText>
          <Button as="a" href="https://apps.apple.com/app/ispy-ai" target="_blank" rel="noopener noreferrer" primary large>
            <AppleLogo /> Download Now
          </Button>
        </SectionContent>
      </CTASection>
    </>
  );
};

export default HomePage;
