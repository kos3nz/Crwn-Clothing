import React, { Profiler } from 'react';

// import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles.jsx';

import Directory from '../../components/directory/directory.component';
import { H1 } from '../../components/styled-components/text.styled.jsx';

//## =============== Component =============== ##//

const Homepage = () => {
  // Testing for error boundary component
  // throw Error;

  return (
    <HomePageContainer>
      <H1 mgbtm="20px">Crwn Clothing</H1>
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration,
          });
        }}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

//## =============== Export =============== ##//

export default Homepage;
