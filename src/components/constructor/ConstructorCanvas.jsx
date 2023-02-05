import styled from 'styled-components';

import { colors, pageSize } from '../../styles.js';

const { firstTextColor, secondTextColor, secondBackgroundColor, thirdTextColor } = colors;

const ConstructorCanvas = (props) => {
  return (
    <CanvasWrapper>
      <h2>Canvas</h2>
    </CanvasWrapper>
  );
};


const CanvasWrapper = styled.div`
  h2 {
    color: ${firstTextColor};
    margin: 30px;
  }
`;

export default ConstructorCanvas;