import styled from 'styled-components';

import { colors, pageSize } from '../../styles.js';

const { firstTextColor, secondTextColor, secondBackgroundColor, thirdTextColor } = colors;

const ConstructorOptions = (props) => {
  return (
    <OptionsWrapper>
      <h2>Options</h2>
    </OptionsWrapper>
  );
};


const OptionsWrapper = styled.div`
  h2 {
    color: ${firstTextColor};
    margin: 30px;
  }
`;

export default ConstructorOptions;
