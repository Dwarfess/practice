import styled from "styled-components";

import { colors, pageSize } from "../../styles.js";
import { useState } from "react";

const {
  firstTextColor,
  secondTextColor,
  secondBackgroundColor,
  thirdTextColor,
} = colors;

const ConstructorOptions = ({ selectedElement, setSelectedElement }) => {
  let allTags = [
    "Choose tag",
    "Header",
    "main",
    "left_aside",
    "right_aside",
    "footer",
    "div",
    "p",
    "ul",
    "li",
    "ol",
    "form",
  ];

  const displayTags = allTags.map((item) => {
    return <option key={item}>{item}</option>;
  });

  function getActivTag(e) {
    let selectedTag = [];
    selectedTag = e.target.value;
    let addTag = [...selectedElement, selectedTag];
    return setSelectedElement(addTag);
  }

  return (
    <OptionsWrapper>
      <h2>Options</h2>
      <select onChange={getActivTag}>{displayTags}</select>
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
