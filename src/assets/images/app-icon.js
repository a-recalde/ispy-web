import React from 'react';
import styled from 'styled-components';
import appIconImage from './app-icon-1024.png';

const IconImage = styled.img`
  height: 100px; /* Made much bigger */
  width: auto;
  margin-right: 0; /* Removed right margin since it's standalone */
`;

const AppIcon = () => {
  return <IconImage src={appIconImage} alt="iSpy-AI Logo" />;
};

export default AppIcon;
