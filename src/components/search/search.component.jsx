import './search.styles.scss';
const Search = ({ type, placeholder, handleChange}) => {
    return (
        <div className="search-container">
            <input type={type} placeholder={placeholder} onChange={handleChange} />
        </div>
    );
}

export default Search;