import styled, { createGlobalStyle } from 'styled-components';

import { colors } from '../../styles.js';
import { fontSize } from '../../styles.js';
const { firstTextColor, secondTextColor, firstBackgroudColor, thirdTextColor } =
  colors;
const {fontSizeH1, fontSizeH2, fontSizeH3, fontSizeH4, fontSizeH5, fontSizeH6, fontSizeFirstLetter, fontSizeText} = fontSize;


const Home = ({ theme = 'first' }) => {

  const themeMap = {
    first: SecondHomeWrapper,
    second: TanyaHomeWrapper,
    third: FirstHomeWrapper
  };

  const HomeWrapper = themeMap[theme];

  return (
    <HomeWrapper>
      <h1>A new generation of modern games and applications</h1>
      <div className="about applications">
        <p>
          A modern application covers use cases that include web and mobile
          backends, IoT applications, AI/ML workloads, batch processing, shared
          services platforms, microservice backends, and more. Developers and IT
          organizations build them with a combination of modular architecture
          patterns, serverless operational models, DevOps, DevSecOps, low-code,
          and agile development processes. A modern application is an answer to
          the slow, ponderous, and long release times of monolithic software
          because it offers greater scalability, portability, resiliency, and
          agility.
        </p>
      </div>

      <div className="about games">
        <p>
          Gaming is one of the most popular computer activities. New
          technologies are constantly arriving to make it possible to develop
          better and more powerful games that can be run in any
          standards-compliant web browser.
        </p>
      </div>      
    </HomeWrapper>
  );
};

const DefaultHomeWrapper = styled.div``;
const SecondHomeWrapper = styled.div`
    h1 {
      margin: ${fontSizeH1};
      font-size: ${fontSizeH1};
      color: ${firstTextColor};

      &:before {
        content: '> > >';
        margin-right: ${fontSizeH1};
        color: red;
      }
      
      &:after {
        content: '< < <';
        margin-left: ${fontSizeH1};
        color: red;
      }
    }
    .about p {
      max-width: 50%;
      margin: 30px auto;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 3px 3px 15px ${firstBackgroudColor};
      font-size: ${fontSizeText};

      &:first-letter {
        font-size: ${fontSizeFirstLetter};
        color: ${firstTextColor};
      }

      &:hover {
        transform: scale(1.2);
        transition: 0.8s;
        box-shadow: 0 0 20px green;
      }
    }`;
const SimpleHomeWrapper = styled.div`

  h1 {
    color: red;
    margin: 50px;
  }

  .about {
    width: 50%;
    margin: 20px auto;
    padding: 20px;
    font-size: 20px;

    &.applications {
      color: ${firstTextColor};
      border: 1px solid ${firstTextColor};
    }

    &.games {
      color: ${thirdTextColor};
      border: 1px solid ${thirdTextColor};
    }
  }
`;

const TanyaHomeWrapper = styled.div`
// display: flex;
// flex-direction: colum;  
// justify-content: space-between;
  background-image: url("/fon.jpg");
  height: calc(100vh - 61px);   
  text-align:center;

  h1 {
    color: #367db1;
    text-align: center;
    text-decoration: overline;
    padding: 40px 0px 50px 0px;
  }

  
  .about {  
    font-size: 18px;
    
      p {
        text-align: justify;
        color: #424c51;
        line-height: 30px;
      }    

      &.applications {    
        display: inline-block;
        width: 30%;      
        margin-right: 55px;
        padding: 15px;
        border: 3px dotted #45928a;
        border-radius: 5px;
        box-shadow: yellow;
        box-shadow: 10px 11px 13px #4084a2;
        
        //flex-grow: 2;
        //width: 50%;
      }
      &.games {
        display: inline-block;
        width: 30%;       
        padding: 15px;
        border: 3px dotted #45928a;
        border-radius: 5px;
        box-shadow: yellow;
        box-shadow: 10px 11px 13px #4084a2;

      &::before {
          content: "GAMES!";  
          // top: 200px;
          // left: 100px;
          width: 100px;
          height: 100px;
          background-color: #5dd2c7; 
          
          &:hover {
            color: red;
            transform: scale(2, 0.5);
          }
        }
        // flex-grow: 1;
        // width: 50%;
      }
  }  
`
const FirstHomeWrapper = styled.div`
  font-size: 20px;
  background: ${firstBackgroudColor};

  border-top: 1px solid ${secondTextColor};
  padding: 20px;
  height: calc(100vh - 61px);
  
  background-image: url('/home3.jpg');
  background-size: cover;

  .img_1 {
    width: 50%;
    height: 50%;
    margin: 50px auto;
    background-image: url('/home3.jpg');
    background-size: cover;
    border:1px solid red;
  }

  h1 {
    width: 60%;
    margin: 150px auto;
    font-size: 80px;
    color: ${firstTextColor};
  }

  .about {
    height: 80%;
    position: absolute;
    top: 15%; 

    &.applications {
      width: 40%;
      left: 15%;
      background: rgb(102, 165, 173, .3);
      color: ${firstTextColor};
    }

    &.games {
      width: 25%;
      left: 60%;
      background: rgb(218, 164, 172, .3);
      color: ${thirdTextColor};
    }

    p {
      text-align: justify;
      padding: 50px;
      position: absolute;
      bottom: 0;
    }
  }
/* 
  .about2 {
    height: 80%;
    background: rgb(218,164,172, .3);
    position: absolute;
    top: 15%;
    left: 60%; 
  } */
`;
export default Home;
