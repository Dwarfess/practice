import styled from 'styled-components';
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
const tagList = [
  {
    name: 'header',
    style: { height: '50px', fontSize: '30px', padding: '10px', border: '2px solid blue' },
    text: 'Block Header',
    id: 1,
  },
  {
    name: 'div',
    style: { color: 'red' },
    text: 'Block Content1',
    id: 2,
  },
  {
    name: 'div',
    style: { color: 'green' },
    text: 'Block Content2',
    id: 3,
  },
  {
    name: 'div',
    style: { color: 'white', border: '2px solid black' },
    text: 'Footer',
    id: 4,
  },
];
const ConstructorPage = (props) => {
  return (
    <ConstructorPageWrapper>
      <h1>Constructor</h1>

      <div className="container">
        <div className="item constructorCanvas">
          <ConstructorCanvas tagList={tagList}></ConstructorCanvas>
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
