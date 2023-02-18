const createId = () => (new Date().getTime() * Math.random()).toFixed();
export const tagItems = [
    {
      name: 'header',
      style: {
        height: '50px',
        fontSize: '30px',
        padding: '10px',
        border: '2px solid blue',
        backgroundColor: 'red',
      },
      text: 'Block Header',
      id: createId(),
    },
    {
      name: 'div',
      style: { color: 'red', backgroundColor: 'green' },
      text: 'Block Content1',
      id: createId(),
    },
    {
      name: 'div',
      style: { color: 'green', backgroundColor: 'blue' },
      text: 'Block Content2',
      id: createId(),
    },
    {
      name: 'div',
      style: {
        color: 'white',
        border: '2px solid black',
        backgroundColor: 'black',
      },
      text: 'Footer',
      id: createId(),
    },
  ]