import { createElement } from 'react';
import styled from 'styled-components';

import { colors, pageSize } from '../../styles.js';

const {
  firstTextColor,
  secondTextColor,
  secondBackgroundColor,
  thirdTextColor,
} = colors;

const ConstructorCanvas = (props) => {
  return (
    <CanvasWrapper>
      {props.tagList.length ? (
        // props.tagList.map((tag) =>
        //   createElement(tag.name, { key: tag.id, style: tag.style, draggable:true}, tag.text)
        // )
        props.tagList.map((tag) => (
          <tag.name
            style={tag.style}
            draggable={true}
            key={tag.id}
            onDragStart={(e) => {
              console.log('start');
            }}
            onDragLeave={(e) => {
              console.log('leave');
            }}
            onDragEnd={(e) => {
              console.log('end');
            }}
            onDragOver={(e) => {
              e.preventDefault();
              console.log('over');
            }}
            onDrop={(e) => {
              e.preventDefault();
              console.log('Drop');
            }}
          >
            {tag.text}
          </tag.name>
        ))
      ) : (
        <h2>Canvas</h2>
      )}
    </CanvasWrapper>
  );
};

const CanvasWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    color: ${firstTextColor};
    margin: 30px;
  }
`;

export default ConstructorCanvas;
