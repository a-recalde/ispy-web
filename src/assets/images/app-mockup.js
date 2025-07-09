import React from 'react';
import styled from 'styled-components';

const MockupContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: 280px;
  height: 560px;
  position: relative;
  margin: 0 auto;
`;

const MockupHeader = styled.div`
  background-color: #f8f8f8;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MockupNotch = styled.div`
  background-color: #333;
  width: 80px;
  height: 20px;
  border-radius: 0 0 10px 10px;
  position: absolute;
  top: 0;
`;

const MockupScreen = styled.div`
  background: linear-gradient(135deg, #4A90E2, #50E3C2);
  height: calc(100% - 30px);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const MockupTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const MockupImage = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
`;

const MockupClue = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
`;

const MockupClueTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const MockupClueText = styled.div`
  color: #666;
`;

const MockupInput = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const MockupInputField = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  flex-grow: 1;
  height: 40px;
  margin-right: 10px;
`;

const MockupButton = styled.div`
  background-color: #4A90E2;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const AppMockup = () => {
  return (
    <MockupContainer>
      <MockupHeader>
        <MockupNotch />
      </MockupHeader>
      <MockupScreen>
        <MockupTitle>iSpy-AI</MockupTitle>
        <MockupImage>📸</MockupImage>
        <MockupClue>
          <MockupClueTitle>Clue:</MockupClueTitle>
          <MockupClueText>I spy something small, rectangular, and blue...</MockupClueText>
        </MockupClue>
        <MockupInput>
          <MockupInputField />
          <MockupButton>→</MockupButton>
        </MockupInput>
      </MockupScreen>
    </MockupContainer>
  );
};

export default AppMockup;
