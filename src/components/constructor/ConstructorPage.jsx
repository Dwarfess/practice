import { useState } from 'react';
import styled from 'styled-components';
import { tagItems } from './data.js';
import ConstructorCanvas from './ConstructorCanvas.jsx';
import ConstructorOptions from './ConstructorOptions.jsx';

import { colors, pageSize } from '../../styles.js';

const {
  firstTextColor,
  secondTextColor,
  secondBackgroundColor,
  thirdTextColor,
} = colors;
const { mainPageHight } = pageSize;


const ConstructorPage = (props) => {
  const [tagList, setTagList] = useState(tagItems);
  return (
    <ConstructorPageWrapper>
      <h1>Constructor</h1>

      <div className="container">
        <div className="item constructorCanvas">
          <ConstructorCanvas
            tagList={tagList}
            setTagList={setTagList}
          ></ConstructorCanvas>
        </div>

        <div className="item constructorOptions">
          <ConstructorOptions></ConstructorOptions>
        </div>
      </div>
    </ConstructorPageWrapper>
  );
};

const ConstructorPageWrapper = styled.div`
  height: ${mainPageHight};

  background-color: ${secondBackgroundColor};

  h1 {
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    font-size: 40px;
    color: ${secondTextColor};
  }

  .container {
    display: flex;
    width: 100%;
    height: calc(100% - 100px);

    .item {
      height: 100%;
      margin: 5px;
      padding: 10px;
      flex-grow: 1;
      background-color: ${secondTextColor};

      &.constructorCanvas {
        width: 70%;
      }

      &.constructorOptions {
        width: 30%;
      }
    }
  }
`;

export default ConstructorPage;
