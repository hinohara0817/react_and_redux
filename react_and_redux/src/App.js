import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

function App() {
  const profiles = [
    {name: "Taro"},
    {name: "Haneko"},
    //name: 10},
    //{},
  ]
  return (
    <div>
      {/* props */}
      {
        profiles.map((profile, index) => {
        //{*/ keyが必要 */}
          return <Cat name={profile.name} key={index}/>
        })
      }
    </div>
  );
}


//関数コンポーネント
const Cat = (props) =>{
  return <div>Meow. I am {props.name}.</div>
}

Cat.propTypes = {
  name: PropTypes.string.isRequired
}
/*
Cat.defaultProps = {
  name: "Noname"
}
*/
export default App;
