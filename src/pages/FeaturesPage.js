import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import AppleLogo from '../assets/images/apple-logo';

const PageHeader = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl} 0;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const PageDescription = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
  
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.light};
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xxl};
  margin-bottom: ${props => props.theme.spacing.xxl};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: ${props => props.imageRight ? 'column-reverse' : 'column'};
    gap: ${props => props.theme.spacing.xl};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureImageContainer = styled.div`
  flex: 1;
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.large};
`;

const FeatureImage = styled.div`
  background-color: ${props => props.theme.colors.primary}33;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: ${props => props.theme.colors.primary};
`;

const FeatureTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.dark};
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.dark};
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  margin-bottom: ${props => props.theme.spacing.lg};
  padding-left: ${props => props.theme.spacing.xl};
  
  li {
    margin-bottom: ${props => props.theme.spacing.sm};
    line-height: 1.6;
  }
`;

const CTASection = styled.section`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xxl} 0;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesPage = () => {
  return (
    <>
      <PageHeader>
        <PageTitle>Features</PageTitle>
        <PageDescription>
          Discover all the amazing features that make iSpy-AI a fun and engaging game for everyone.
        </PageDescription>
      </PageHeader>
      
      <Section>
        <SectionContent>
          <FeatureRow>
            <FeatureContent>
              <FeatureTitle>Advanced Object Recognition</FeatureTitle>
              <FeatureDescription>
                Our app uses cutting-edge AI technology to identify objects in your photos with incredible accuracy. 
                The AI can recognize a wide variety of objects and provide detailed descriptions including color, 
                shape, and size.
              </FeatureDescription>
              <FeatureList>
                <li>Powered by OpenAI's GPT-4o vision model</li>
                <li>Identifies multiple objects in a single image</li>
                <li>Provides detailed object attributes</li>
                <li>Works in various lighting conditions</li>
              </FeatureList>
            </FeatureContent>
            <FeatureImageContainer>
              <FeatureImage>🔍</FeatureImage>
            </FeatureImageContainer>
          </FeatureRow>
          
          <FeatureRow imageRight>
            <FeatureImageContainer>
              <FeatureImage>💡</FeatureImage>
            </FeatureImageContainer>
            <FeatureContent>
              <FeatureTitle>Clever AI-Generated Clues</FeatureTitle>
              <FeatureDescription>
                The app creates fun and challenging clues about objects in your photos. These clues 
                describe the object's attributes without naming it directly, making the game both 
                entertaining and educational.
              </FeatureDescription>
              <FeatureList>
                <li>Descriptive clues based on color, shape, and size</li>
                <li>Varying difficulty levels</li>
                <li>Educational content that helps build vocabulary</li>
                <li>Engaging for both children and adults</li>
              </FeatureList>
            </FeatureContent>
          </FeatureRow>
          
          <FeatureRow>
            <FeatureContent>
              <FeatureTitle>Multiplayer Fun</FeatureTitle>
              <FeatureDescription>
                Play with friends and family in the same room or remotely. The app makes it easy to 
                share games and compete to see who can guess the most objects correctly.
              </FeatureDescription>
              <FeatureList>
                <li>Create game rooms to play with others</li>
                <li>Real-time gameplay</li>
                <li>Scorekeeping and leaderboards</li>
                <li>Perfect for parties and gatherings</li>
              </FeatureList>
            </FeatureContent>
            <FeatureImageContainer>
              <FeatureImage>👨‍👩‍👧‍👦</FeatureImage>
            </FeatureImageContainer>
          </FeatureRow>
        </SectionContent>
      </Section>
      
      <CTASection>
        <SectionContent>
          <CTATitle>Ready to Experience iSpy-AI?</CTATitle>
          <CTAText>
            Download the app now and start playing with friends and family. It's free to try!
          </CTAText>
          <Button as="a" href="https://apps.apple.com/app/ispy-ai" target="_blank" rel="noopener noreferrer" primary large>
            <AppleLogo /> Download Now
          </Button>
        </SectionContent>
      </CTASection>
    </>
  );
};

export default FeaturesPage;
