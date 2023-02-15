import styled from 'styled-components';


import { colors, pageSize } from '../../styles.js';
import { useState } from 'react';

const { firstTextColor, secondTextColor, secondBackgroundColor, thirdTextColor } = colors;

const ConstructorOptions = (props) => {

  let allTags = ['Header', 'main', 'left_aside', 'right_aside', 'footer', 'div', 'p', 'ul', 'li', 'ol', 'form']

  allTags.forEach(itm => {
    
  })

  const [tags, setTags] = useState([]);
  
  return (
    <OptionsWrapper>
      <h2>Options</h2>

      <select id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>   
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
