import React from 'react';
import styled from 'styled-components';
import { email } from '../utils/config';

const StyledLinkWrapper = styled.div`
  transform: rotate(-90deg);
  position: fixed;
  left: -150px;
  bottom:180px;
  font-size: 16px;

   a {
    display: flex;
    text-align: start;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition:0.3s;
      &:hover {
        color:#3bafca;
      }
      &:before {
      content: "";
      display: block;
      width: 200px;
      height: 1px;
      background: #707881;
      margin-left: 15px;
      }
   }

`;

function Email() {
  return (
    <StyledLinkWrapper>
      <code>
        <a href={`mailto:${email}`}>{email}</a>
      </code>
    </StyledLinkWrapper>
  );
}

export default Email;
