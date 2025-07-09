import React from 'react';
import styled from 'styled-components';

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

const PolicyContainer = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
`;

const PolicyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
`;



const PolicySection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PolicyTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.dark};
`;

const PolicyText = styled.div`
  color: ${props => props.theme.colors.dark};
  line-height: 1.6;
  
  p {
    margin-bottom: ${props => props.theme.spacing.md};
  }
  
  ul, ol {
    margin-bottom: ${props => props.theme.spacing.md};
    padding-left: ${props => props.theme.spacing.xl};
    
    li {
      margin-bottom: ${props => props.theme.spacing.sm};
    }
  }
`;

const PrivacyPage = () => {
  return (
    <>
      <PageHeader>
        <PageTitle>Privacy Policy</PageTitle>
        <PageDescription>
          We are committed to protecting your privacy. Please read our policy below.
        </PageDescription>
      </PageHeader>
      
      <PolicyContainer>
        <PolicyContent>
          <PolicySection>
            <PolicyTitle>Introduction</PolicyTitle>
            <PolicyText>
              <p>
                Welcome to iSpy-AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience when using our mobile application ("App").
              </p>
              <p>
                This Privacy Policy explains our practices regarding the collection, use, and disclosure of information through our App. By downloading, accessing, or using our App, you agree to the terms of this Privacy Policy.
              </p>
              <p>
                We may update this Privacy Policy from time to time. If we make significant changes, we will notify you through the App or by other means.
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>Information We Collect</PolicyTitle>
            <PolicyText>
              <p>
                <strong>Images:</strong> When you use our App, you provide photos you take or upload for gameplay purposes. These images are processed to identify objects and generate clues.
              </p>
              <p>
                <strong>Anonymous Usage:</strong> All users are anonymous through Firebase Authentication. We do not collect personally identifiable information.
              </p>
              <p>
                <strong>Analytics Data:</strong> We collect anonymous usage data through Firebase Analytics to help us improve the App experience.
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>How We Use AI Technology</PolicyTitle>
            <PolicyText>
              <p>
                Our App uses OpenAI's GPT-4o vision model to analyze photos and generate clues. When you take or upload a photo:
              </p>
              <ul>
                <li>The image is sent to OpenAI's servers for processing</li>
                <li>The AI identifies objects in the image with descriptive attributes (color, shape, size)</li>
                <li>The AI generates clues that only mention attributes without naming the object</li>
                <li>The image and AI-generated data are used solely for gameplay purposes</li>
              </ul>
              <p>
                We do not use your photos or AI-generated data for training AI models or for purposes beyond providing the App's functionality.
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>Data Retention</PolicyTitle>
            <PolicyText>
              <p>
                <strong>Short-Term Storage:</strong> All images, game rooms, and related data are automatically deleted after 24 hours.
              </p>
              <p>
                <strong>No Long-Term Data:</strong> We do not maintain a database of user images or gameplay data beyond the 24-hour period.
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>Sharing of Information</PolicyTitle>
            <PolicyText>
              <p>We share limited information as follows:</p>
              <ul>
                <li><strong>OpenAI:</strong> Images are shared with OpenAI solely for object detection and clue generation.</li>
                <li><strong>Google AdMob:</strong> We use Google AdMob for in-app advertising, which may collect anonymous device information.</li>
                <li><strong>Firebase:</strong> We use Firebase for anonymous authentication and analytics.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
              </ul>
              <p>
                We do not sell or share your data with any other third parties.
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>Data Security</PolicyTitle>
            <PolicyText>
              <p>
                We implement appropriate technical and organizational measures to protect the information we collect and maintain. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>Children's Privacy</PolicyTitle>
            <PolicyText>
              <p>
                Our App is designed to be family-friendly and may be used by children. We comply with applicable laws regarding children's privacy. We do not knowingly collect personal information from children under 13 without verifiable parental consent. If you are a parent or guardian and believe we have collected information from your child without your consent, please contact us, and we will take steps to remove such information.
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>Your Rights and Choices</PolicyTitle>
            <PolicyText>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to correct or update your personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to restrict or object to processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>Changes to This Privacy Policy</PolicyTitle>
            <PolicyText>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>Contact Us</PolicyTitle>
            <PolicyText>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@ispy-ai.app">support@ispy-ai.app</a>
              </p>
            </PolicyText>
          </PolicySection>
          
          <PolicySection>
            <PolicyTitle>Last Updated</PolicyTitle>
            <PolicyText>
              <p>This Privacy Policy was last updated on July 9, 2025.</p>
            </PolicyText>
          </PolicySection>
        </PolicyContent>
      </PolicyContainer>
    </>
  );
};

export default PrivacyPage;
