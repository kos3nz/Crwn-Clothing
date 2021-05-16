import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserDropdownItemContainer = styled(Link)`
  padding: 5px 10px;
  color: #444;
  background-color: #eee;
  font-weight: bold;
  transition: all 0.2s;

  &:not(:first-child) {
    border-top: 1px solid #aaa;

    &:hover {
      cursor: pointer;
      background-color: #444;
      color: #eee;
    }
  }
`;
