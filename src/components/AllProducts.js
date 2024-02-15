import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';

function AllProducts() {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        fetchData(`${baseUrl}/products/?page=${currentPage}`);
    }, [currentPage]); // Fetch data when currentPage changes

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json()) // parse the JSON data
            .then((data) => {
                setProducts(data.results);
                setTotalResults(data.count);
            });
    }

    function handlePageChange(pageNumber) {
        setCurrentPage(pageNumber);
    }

    const totalPages = Math.ceil(totalResults); // Assuming 1 item per page

    return (
        <section className='container mt-4'>
            <h2 className='mb-4'>All Products</h2>
            <div className='row mb-4'>
                {products.map((product) => <SingleProduct key={product.id} product={product} />)}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {[...Array(totalPages).keys()].map((page) => (
                        <li className="page-item" key={page + 1}>
                            <Link onClick={() => handlePageChange(page + 1)} to={`/products/?page=${page + 1}`} className="page-link">{page + 1}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
}

export default AllProducts;
