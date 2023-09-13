import React, { useState } from 'react';


function SearchBar() {

    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="search">
            <form>
                <input id="searchbar" type="text" name="search" placeholder="Search..." />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default SearchBar;