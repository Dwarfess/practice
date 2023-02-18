import { useState } from 'react';
import styled from 'styled-components';

const SettingsBlock = ({ currentBlock, setCurrentBlock, resetTagList }) => {
    const changeCurrentBlock = (e) => {
    const item = {
      ...currentBlock,
      style: {
        ...currentBlock.style,
        [e.target.name]: e.target.value + 'px',
      },
    };
    resetTagList(item);
  };

  const numberConverter = (value) => parseInt(value);

  return (
    <SettingsBlockStyle>
      <label>
        Top pos:
        <input
          className="input top"
          type="number"
          name="top"
          value={numberConverter(currentBlock.style.top) || 100}
          onChange={changeCurrentBlock}
        ></input>
      </label>
      <label>
        Left pos:
        <input
          className="input left"
          type="number"
          name="left"
          value={numberConverter(currentBlock.style.left) || 100}
          onChange={changeCurrentBlock}
        ></input>
      </label>
      <label>
        Width pos:
        <input
          className="input width"
          type="number"
          name="width"
          value={numberConverter(currentBlock.style.width) || 100}
          onChange={changeCurrentBlock}
        ></input>
      </label>
      <label>
        Height pos:
        <input
          className="input height"
          type="number"
          name="height"
          value={numberConverter(currentBlock.style.height) || 100}
          onChange={changeCurrentBlock}
        ></input>
      </label>
      <button onClick={() => setCurrentBlock(null)}>Hide settings block</button>
    </SettingsBlockStyle>
  );
};

const SettingsBlockStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  width: 1310px;
  height: 100px;
  top: -110px;
  left: 0;
  background-color: white;
  label {
    font-size: 18px;
    .input {
      width: 80px;
      margin-left: 10px;
    }
  }
`;

export default SettingsBlock;
