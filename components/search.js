"use client"
import {useState} from "react"

const Search = () => {
    const [query, setQuery] = useState("")

    const keys = ["name.first", "last"]
  
    const search = (data) => {
      return data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query))) 
    }
    
    return(
            <div className="w-[150px] border rounded-full">
            <input type="text" placeholder="search" className=" " onChange={(e) => setQuery(e.target.value)} />
            </div>
    )
}

export default Search;