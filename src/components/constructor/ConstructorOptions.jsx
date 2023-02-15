import styled from 'styled-components';
import { Dropdown, Menu } from 'semantic-ui-react';
import _ from 'lodash'

import { colors, pageSize } from '../../styles.js';

const { firstTextColor, secondTextColor, secondBackgroundColor, thirdTextColor } = colors;

const ConstructorOptions = (props) => {
  
  const getOptions = (number, prefix = 'Choice ') =>
  _.times(number, (index) => ({
    key: index,
    text: `${prefix}${index}`,
    value: index,
  }))
  return (
    <OptionsWrapper>
      <h2>Options</h2>
        <Menu vertical>
        <Menu.Item as='a'>Link 1</Menu.Item>
        <Menu.Item as='a'>Link 2</Menu.Item>
        <Menu.Item header>All Sections</Menu.Item>
        <Menu.Item>
        <Dropdown placeholder='More' fluid selection options={getOptions(8)} />
        </Menu.Item>
      </Menu>
      
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
