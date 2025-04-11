import "./style.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Procure uma blusinha..."
        className="input-box"
      />
    </div>
  );
};

export default SearchBar;
