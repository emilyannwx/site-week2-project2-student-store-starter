import "./Searchbar.css"

export default function Searchbar() {
    return (
      <div className="search-bar">
        <input type = "text" placeholder="Search Items" />
        <button className = "material-icons"> search </button>
      </div>
    )
  }