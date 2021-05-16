import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import { NoItemsWrapper } from './no-items.styles';

const NoItems = ({ children, history }) => (
  <NoItemsWrapper>
    <p>{children}</p>
    <CustomButton
      style={{
        fontSize: '13px',
        minWidth: 'unset',
        padding: '0 25px',
        height: '40px',
      }}
      onClick={() => history.push('/shop')}
    >
      Go to shop &rarr;
    </CustomButton>
  </NoItemsWrapper>
);

export default withRouter(NoItems);
