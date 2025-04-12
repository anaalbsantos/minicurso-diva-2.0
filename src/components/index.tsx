import "./style.css";

interface SearchBarProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Procure uma blusinha..."
        className="input-box"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;