import { BrowserRouter, Route, Routes } from "react-router-dom";
import Myth from "./Myth";
import Main from "./Main";
import CreateUser from "./CreateUser";
import Homepage from "./Homepage";
import UserList from "./UserList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/blog" element={<Myth/>}/>
            <Route path="/create-user" element={<CreateUser/>}/>
            <Route path="/user-list" element={<UserList/>}/>
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;