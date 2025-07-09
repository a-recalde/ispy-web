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

const TermsContainer = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
`;

const TermsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
`;



const TermsSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const TermsTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.8rem;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.dark};
`;

const TermsText = styled.div`
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

const TermsPage = () => {
  return (
    <>
      <PageHeader>
        <PageTitle>Terms of Service</PageTitle>
        <PageDescription>
          Please read these terms carefully before using iSpy-AI.
        </PageDescription>
      </PageHeader>
      
      <TermsContainer>
        <TermsContent>
          
          <TermsSection>
            <TermsTitle>1. Acceptance of Terms</TermsTitle>
            <TermsText>
              <p>
                Welcome to iSpy-AI. These Terms of Service ("Terms") govern your access to and use of the iSpy-AI mobile application ("App"), including any content, functionality, and services offered through the App.
              </p>
              <p>
                By downloading, accessing, or using our App, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the App.
              </p>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>2. Changes to Terms</TermsTitle>
            <TermsText>
              <p>
                We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them.
              </p>
              <p>
                Your continued use of the App following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes.
              </p>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>3. Accessing the App and Account Security</TermsTitle>
            <TermsText>
              <p>
                We reserve the right to withdraw or amend the App, and any service or material we provide through the App, in our sole discretion without notice. We will not be liable if, for any reason, all or any part of the App is unavailable at any time or for any period.
              </p>
              <p>
                You are responsible for:
              </p>
              <ul>
                <li>Making all arrangements necessary for you to have access to the App.</li>
                <li>Ensuring that all persons who access the App through your device are aware of these Terms and comply with them.</li>
              </ul>
              <p>
                If you choose, or are provided with, a user name, password, or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You acknowledge that your account is personal to you and agree not to provide any other person with access to the App using your user name, password, or other security information.
              </p>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>4. Intellectual Property Rights</TermsTitle>
            <TermsText>
              <p>
                The App and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by us, our licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                These Terms permit you to use the App for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our App, except as follows:
              </p>
              <ul>
                <li>Your device may temporarily store copies of such materials incidental to your accessing and viewing those materials.</li>
                <li>You may store files that are automatically cached by your device for display enhancement purposes.</li>
                <li>If we provide social media features with certain content, you may take such actions as are enabled by such features.</li>
              </ul>
              <p>
                You must not:
              </p>
              <ul>
                <li>Modify copies of any materials from the App.</li>
                <li>Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.</li>
                <li>Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from the App.</li>
              </ul>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>5. Prohibited Uses</TermsTitle>
            <TermsText>
              <p>
                You may use the App only for lawful purposes and in accordance with these Terms. You agree not to use the App:
              </p>
              <p>
                You are solely responsible for your User Content and must ensure that you have all necessary rights to share any images. You must not upload or take photos that:
              </p>
              <ul>
                <li>Contain illegal, harmful, threatening, abusive, or otherwise objectionable content</li>
                <li>Infringe on any patent, trademark, trade secret, copyright, or other intellectual property rights</li>
                <li>Violate the privacy or publicity rights of any person</li>
                <li>Contain personally identifiable information of children under 13</li>
              </ul>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>7. Prohibited Uses</TermsTitle>
            <TermsText>
              <p>You may use the App only for lawful purposes and in accordance with these Terms. You agree not to use the App:</p>
              <ul>
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way</li>
                <li>To attempt to circumvent the App's intended functionality or security measures</li>
                <li>To upload or transmit viruses, malware, or other malicious code</li>
                <li>To interfere with or disrupt the App or servers or networks connected to the App</li>
                <li>To collect or harvest any information from the App</li>
              </ul>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>8. Third-Party Services</TermsTitle>
            <TermsText>
              <p>
                The App uses third-party services including:
              </p>
              <ul>
                <li>OpenAI's GPT-4o for image processing and clue generation</li>
                <li>Firebase for anonymous authentication and analytics</li>
                <li>Google AdMob for in-app advertising</li>
              </ul>
              <p>
                Your use of the App constitutes acceptance of the relevant terms of service and privacy policies of these third-party providers.
              </p>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>9. Disclaimer of Warranties</TermsTitle>
            <TermsText>
              <p>
                THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT THE APP WILL FUNCTION UNINTERRUPTED, SECURELY OR BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, OR THAT THE RESULTS OF USING THE APP WILL MEET YOUR REQUIREMENTS.
              </p>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>10. Limitation of Liability</TermsTitle>
            <TermsText>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL WE, OUR AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>11. Governing Law</TermsTitle>
            <TermsText>
              <p>
                These Terms and your use of the App shall be governed by and construed in accordance with the laws of the United States and the State of California, without giving effect to any principles of conflicts of law.
              </p>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>12. Contact Information</TermsTitle>
            <TermsText>
              <p>
                If you have any questions about these Terms, please contact us at: <a href="mailto:support@ispy-ai.app">support@ispy-ai.app</a>
              </p>
            </TermsText>
          </TermsSection>
          
          <TermsSection>
            <TermsTitle>13. Last Updated</TermsTitle>
            <TermsText>
              <p>These Terms of Service were last updated on July 9, 2025.</p>
            </TermsText>
          </TermsSection>
        </TermsContent>
      </TermsContainer>
    </>
  );
};

export default TermsPage;
