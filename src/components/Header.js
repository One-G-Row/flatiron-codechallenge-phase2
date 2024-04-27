import React,{useState} from "react"

function Header(){
const [input, setInput] = useState()

function handleInput(e){
setInput(e.target.value)
}

console.log(input)

return(
<div>
<h1>Bank of FlatIron</h1>
<input type="text" onChange={handleInput}/>
</div> 
)

}
export default Header