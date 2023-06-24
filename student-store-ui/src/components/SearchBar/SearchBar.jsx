import "./Searchbar.css"

export default function Searchbar({selectedCategory, setCategory, products =[], searchValue, setSearchValue}) {


 const handleOnSearch = (event) => {
  setSearchValue(event.target.value)
}


const categories = ["All Categories", "Clothing", "Food", "Tech" ]
    return (
      <div className = "Search">
        <div className = "row">
         <div className="search-bar">
          <input type = "text" placeholder="Search Items" value = {searchValue} onChange = {handleOnSearch}/>
          <button className = "material-icons"> search </button>
          </div>
        </div>
        <div className = "row-cat">
          
          <ul className = "categories">
            {/*iterates through category array 
        {/* {categories.map((category,index) => (
          <li className = {selectedCategory == category ? "selected" : ""} key = {category+index}>
            <button onClick={()  => setCategory(category)}>{category}</button>
          </li>
         )
         )}*/}
          </ul> 
        </div>
      </div>
    )
  }
     /*
            <li>
              <button onClick = {selectCategory("All Categories")} >All Categories </button>
            </li>
            <li>
              <button onClick = {selectCategory("Food")}>Food</button>
            </li>
            <li>
            <button onClick = {selectCategory("Accessories")}>Accessories</button>
            </li>
            <li>
              <button onClick = {selectCategory("Tech")}>Tech</button>
            </li>
            */