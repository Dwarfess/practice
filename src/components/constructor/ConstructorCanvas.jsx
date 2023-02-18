import { createElement } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SettingsBlock from './SettingsBlock.jsx';
import { colors, pageSize } from '../../styles.js';

const {
  firstTextColor,
  secondTextColor,
  secondBackgroundColor,
  thirdTextColor,
} = colors;

const ConstructorCanvas = ({ tagList, setTagList }) => {
  const [currentBlock, setCurrentBlock] = useState(null);

  const askSettingsBlock = (e) => {
    const item = tagList.find((tag) => tag.id === e.target.id);
    setCurrentBlock(item);
  };

  const resetTagList = (currentItem) => {
    const items = tagList.map((tag) => {
      if (currentItem.id !== tag.id) return tag;
      const item = {
        ...tag,
        style: {
          ...currentItem.style,
        },
      };
      return item;
    });

    setTagList(items);
    setCurrentBlock(currentItem);
  };
  return (
    <CanvasWrapper>
      {currentBlock && (
        <SettingsBlock
          currentBlock={currentBlock}
          setCurrentBlock={setCurrentBlock}
          tagList={tagList}
          resetTagList={resetTagList}
        />
      )}
      {tagList.length ? (
        tagList.map((tag) => (
          <tag.name
            className='block'
            style={tag.style}
            draggable={true}
            key={tag.id}
            id={tag.id}
            onClick={askSettingsBlock}
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
  position: relative;
  .block {
    position: absolute;
  }
  h2 {
    color: ${firstTextColor};
    margin: 30px;
  }
`;

export default ConstructorCanvas;
