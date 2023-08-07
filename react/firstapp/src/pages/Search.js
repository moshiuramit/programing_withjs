import { useState, useEffect } from 'react';

function Search() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["capital", "name", "numericCode"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json")
        .then((res)=> res.json())
        .then((result) => {
            setIsLoaded(true);
            setItems(result);
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        });
    }, []);

    const data = Object.values(items);
    // Wite Search Funtionality Here
    function searchIt(items) {
        return items.filter((item) => {
            if(item.region === filterParam) {
                return searchParam.some((newItem) => {
                    return(
                        item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                    );
                });
            }else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    if(error){
        return(
            <p>
                {error.message}, if you get this error, the free API might have stoped working.
            </p>
        );
    }else if(!isLoaded){
        return <>Loading...</>;
    }else{
        return(
            <div className='search'>
                <div className='wrapper'>
                    <div className='search-wrapper'>
                        <label htmlFor='search-form'>
                            <input type='search' name='search-form' id='search-form' className='search-input' placeholder='Search For ... ' value={q}
                            onChange={(e) => setQ(e.target.value)}
                            />
                        </label>
                        <span className='sr-only'>Search Countries Here</span>
                        <div className='select'>
                            <select onChange={(e)=> {
                                setFilterParam(e.target.value);
                            }} className='custom-select' aria-label='Filter Countries by Region'>
                                <option value="All" defaultValue="All">Filter By Region</option>
                                <option value="Africa">Africa</option>
                                <option value="Americas">America</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                            <span className='focus'></span>
                        </div>
                    </div> {/* End Search Wrapper */}
                    <div>Total {data.length} country </div>
                    <ul className='card-grid'>
                        {searchIt(data).map((item) => (
                            <li key={item.numericCode}>
                                <article className='card' >
                                    <div className='card-image'>
                                        <img src={item.flag.large}
                                            alt={item.name} />
                                    </div>
                                    <div className="card-content">
                                        <h2 className="card-name">{item.name}</h2>
                                        <ol className="card-list">
                                            <li>
                                                population:{" "}
                                            <span>{item.population}</span>
                                            </li>
                                            <li>
                                                Region: <span>{item.region}</span>
                                            </li>
                                            <li>
                                                Capital: <span>{item.capital}</span>
                                            </li>
                                        </ol>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Search;