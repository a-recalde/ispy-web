import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

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
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  text-align: center;
`;

const DownloadOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.xxl};
  margin: ${props => props.theme.spacing.xxl} 0;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: ${props => props.theme.spacing.xl};
  }
`;

const DownloadCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.large};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.medium};
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const PlatformIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

const PlatformTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.dark};
`;

const PlatformDescription = styled.p`
  color: ${props => props.theme.colors.dark};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ComingSoonBadge = styled.span`
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 0.8rem;
  font-weight: bold;
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const RequirementsSection = styled.div`
  margin-top: ${props => props.theme.spacing.xxl};
  text-align: left;
`;

const RequirementsTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: center;
`;

const RequirementsList = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  
  li {
    margin-bottom: ${props => props.theme.spacing.md};
    line-height: 1.6;
  }
`;

const DownloadPage = () => {
  return (
    <>
      <PageHeader>
        <PageTitle>Download iSpy-AI</PageTitle>
        <PageDescription>
          Get the app on your favorite device and start playing today!
        </PageDescription>
      </PageHeader>
      
      <Section>
        <SectionContent>
          <DownloadOptions>
            <DownloadCard>
              <PlatformIcon>
                <i className="fab fa-apple"></i>
              </PlatformIcon>
              <PlatformTitle>iOS</PlatformTitle>
              <PlatformDescription>
                Download iSpy-AI for iPhone and iPad from the App Store.
              </PlatformDescription>
              <Button primary fullWidth as="a" href="https://apps.apple.com/app/ispy-ai" target="_blank" rel="noopener noreferrer">
                Download for iOS
              </Button>
            </DownloadCard>
            
            <DownloadCard>
              <PlatformIcon>
                <i className="fab fa-android"></i>
              </PlatformIcon>
              <PlatformTitle>Android</PlatformTitle>
              <ComingSoonBadge>Coming Soon</ComingSoonBadge>
              <PlatformDescription>
                Android version is currently in development and will be available soon.
              </PlatformDescription>
              <Button disabled fullWidth>
                Coming Soon
              </Button>
            </DownloadCard>
          </DownloadOptions>
          
          <RequirementsSection>
            <RequirementsTitle>System Requirements</RequirementsTitle>
            <RequirementsList>
              <li><strong>iOS:</strong> iOS 14.0 or later. Compatible with iPhone, iPad, and iPod touch.</li>
              <li><strong>Android:</strong> Android 8.0 or later (coming soon).</li>
              <li><strong>Internet Connection:</strong> Required for AI object recognition and multiplayer features.</li>
              <li><strong>Camera:</strong> Device must have a functioning camera for taking photos.</li>
              <li><strong>Storage:</strong> At least 100MB of free space recommended.</li>
            </RequirementsList>
          </RequirementsSection>
        </SectionContent>
      </Section>
    </>
  );
};

export default DownloadPage;
