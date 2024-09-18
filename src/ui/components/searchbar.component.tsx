import React,{ChangeEvent} from "react";
import {FaSearch} from "react-icons/fa";

const styles={
    container:{
        display:"flex",
        alignItems:"center",
        border:"1px solid #ccc",
        borderRadius:"5px",
        padding:"5px",
        maxWidth:"230px",
        width:"100%",
    },
    input:{
        outline:"none",
        border:"none",
        flex:1,
        padding:"8px",
        fontSize:"15px",
        height:"25px",
    },
    icon:{
        color:"aaa",
        marginRight:"8px",
        fontSize:"18px",
    },
};
interface SearchBarProps{
    value:string;
    onChange:(event:ChangeEvent<HTMLInputElement>)=> void;

}
const SearchBar:React.FC<SearchBarProps>=({value,onChange})=>{
    return(
        <div style={styles.container}>
            <h1>hello</h1>
             <input
             type="text"
             style={styles.input}
             placeholder="Search"
             value={value}
             onChange={onChange}
             />
            <FaSearch style={styles.icon} />

        </div>
    );
};
export default SearchBar;