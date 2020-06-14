import React from 'react';

function App() {
  const profiles = [
    {name: "Taro"},
    {name: "Haneko"},
    {},
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

Cat.defaultProps = {
  name: "Noname"
}
export default App;
