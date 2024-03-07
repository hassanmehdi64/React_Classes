
import './App.css'
import Serv from './serv'

function App() {

  // console.log(props.uname);

  // let uname = " Waqar "
  let arr = ["one", "Two", "Three"]

  let obj = {
    name: "ali",
    age: 23
  }

  const fun = function () {
    document.write("hello function")
    console.log("hello func");
  }

  return (
    <>

      <Serv title="Waqar" btnText="Like" array={arr} object={obj}
        func={fun} />


    </>
  )
}

export default App
