import React from 'react';

// import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles.jsx';

import Directory from '../../components/directory/directory.component';
import { H1 } from '../../components/styled-components/text.styled.jsx';

//## =============== Component =============== ##//

const Homepage = () => (
  <HomePageContainer>
    <H1 mgbtm="30px">Crwn Clothing</H1>
    <Directory />
  </HomePageContainer>
);

//## =============== Export =============== ##//

export default Homepage;
