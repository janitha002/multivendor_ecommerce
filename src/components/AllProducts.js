import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { useState,useEffect } from 'react';
function AllProducts(){
    const baseUrl='http://127.0.0.1:8000/api';
    const [Products,setProducts]=useState([]);
    const [totalResult,setTotalResults]=useState(0);

    
    useEffect(() => {
        fetchData(baseUrl+'/products');
    });

    function fetchData(baseurl){
        fetch(baseurl)
        .then((response) => response.json()) // parse the JSON data
        .then((data) => {
            setProducts(data.results);
            setTotalResults(data.count);
        });
    }

    function changeUrl(baseurl){
        fetchData(baseurl);
    }

    var links=[];
    for(let i=1; i<=totalResult; i++){
        links.push(<li class="page-item"><Link onClick={()=>changeUrl(baseUrl+'/products/?peag=${i}')} to={'/products/?peag=${i}'} class="page-link">{i}</Link></li>)
    }

    return (
        <section className='container mt-4'>
        <h2 className='mb-4'>All Products</h2>
            <div className='row mb-4'>
                {
                    Products.map((product) => <SingleProduct product={product} />)
                }
                
            </div>
            
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {links}
                </ul>
            </nav>

        </section>
    )
}

export default AllProducts;