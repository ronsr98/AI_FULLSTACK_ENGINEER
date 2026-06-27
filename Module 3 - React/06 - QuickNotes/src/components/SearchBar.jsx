import { CATEGORIES } from '../categories'

// step 9 - search box + a filter button per category
const SearchBar = ({ search, setSearch, activeCategory, setActiveCategory }) => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="filters">
        <button
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.name}
            className={activeCategory === c.name ? "active" : ""}
            onClick={() => setActiveCategory(c.name)}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
