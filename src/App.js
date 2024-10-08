import { useDispatch, useSelector } from "react-redux";
import { addCount } from "./store/countReducer";
import { useEffect, useState } from "react";
import { addCounter } from "./store/countToolkitReducer";
import { addTimedOut } from "./store/countToolkitReducer";
import { fetchUsers } from "./store/userSlice";
import { PostContainer } from "./components/postContainer";
import { PostContainer2 } from "./components/postContainer2";

function App() {
  // const dispatch = useDispatch();
  // const count = useSelector( state => state.count.count);
  // const {users, isLoading, error} = useSelector( state => state.users);
  // const counter = useSelector( state => state.counter.counter);
  // const [inputValue, setInputValue] = useState(0);

  // useEffect( () => {
  //   dispatch(fetchUsers());;
  // },[])


  return (
    <div className="App">
      {/* <div>{counter}</div>
      <input 
        type="number" 
        value={inputValue}
        onChange={ (e) => { setInputValue(Number(e.target.value))}}
      />
      <button onClick={() => {dispatch(addTimedOut(inputValue)); setInputValue(0)}}>прибавить</button>
      <div>
        {isLoading && <h1>Загрузка пользователей...</h1>}
        {error && <h1>{error}</h1>}
        {JSON.stringify(users, null, 2)}
      </div> */}
      <div style={{display: "flex"}}>
          <PostContainer />
          <PostContainer2 />
      </div>
      
      
    </div>
  );
}

export default App;
