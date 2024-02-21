import { Link } from 'react-router-dom';
import logo from '../logo.svg'; // Import logo
import { useState, useEffect } from 'react';

function Categories() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        fetchData(`${baseUrl}/categories/?page=${currentPage}`);
    }, [currentPage]); // Fetch data when currentPage changes

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json()) // parse the JSON data
            .then((data) => {
                setCategories(data.results);
                setTotalResults(data.count);
            });
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    // Calculate total pages based on totalResults and PAGE_SIZE
    const totalPages = Math.ceil(totalResults / 1); // Assuming PAGE_SIZE is 1

    // Generate pagination links
    const links = [];
    for (let i = 1; i <= totalPages; i++) {
        links.push(
            <li className="page-item" key={i}>
                <Link onClick={() => handlePageChange(i)} to={`/categories/?page=${i}`} className="page-link">{i}</Link>
            </li>
        );
    }

    return (
        <section className="container mt-4">
            {/* Categories */}
            <h2 className='mb-4'>All Categories</h2>
            <div className='row mb-2'>
                {categories.map((category) =>
                    <div className='col-12 col-md-3 mb-4' key={category.id}>
                        <div className="card">
                            <img src={logo} className="card-img-top" alt={category.title} />
                            <div className="card-body">
                                <h4 className="card-title">
                                    <Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link>
                                </h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads: 2356
                            </div>
                        </div>
                    </div>
                )}
                {/* Category Box */}
            </div>
            {/* End Categories */}

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {links}
                </ul>
            </nav>
        </section>
    );
}

export default Categories;
