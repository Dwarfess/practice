import styled from 'styled-components';


import { colors, pageSize } from '../../styles.js';
import { useState } from 'react';

const { firstTextColor, secondTextColor, secondBackgroundColor, thirdTextColor } = colors;

const ConstructorOptions = (props) => {

  let allTags = ['Header', 'main', 'left_aside', 'right_aside', 'footer', 'div', 'p', 'ul', 'li', 'ol', 'form']

  const displayTag = allTags.map(item => {
    return <option>{item}</option>       
  })

 function getActivTag(e) {
 let selectedTag = e.target
 return console.log(selectedTag)

 }
    
  return (
    <OptionsWrapper>
      <h2>Options</h2>
      <select onChange={getActivTag}>{displayTag}</select>
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
