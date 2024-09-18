import { ChangeEvent, useState } from "react";
import "./App.css";
import SearchBar from "./ui/components/searchbar.component";
import Login from "./ui/pages/login.page";

const App=()=> {
  const[SearchValue,setSearchValue]=useState("")
  const handleSearchChange=(event:ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(event.target.value);
  };
  return (
    <div className="App">
      <Login />
     <SearchBar value={SearchValue}onChange={handleSearchChange}/> 
    </div>
  );
};

export default App;
