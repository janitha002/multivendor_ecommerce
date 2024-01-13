import logo from '../logo.svg';
import{Link} from 'react-router-dom';
function Categories(){
    return (
        <section className="container mt-4">
            {/* Categories */}
            <h2 className='mb-4'>All Categories</h2>
            <div className='row mb-2'>
                {/* Category Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title"><Link to ="/category/python/1">Python</Link></h4>
                    </div>
                    <div className='card-footer'>
                    Product Downloads: 2356
                    </div>
                </div>
                </div>
                {/* Category Box End*/}
                {/* Category Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title"><Link to ='/'>Category title</Link></h4>
                    </div>
                    <div className='card-footer'>
                    Product Downloads: 2356
                    </div>
                </div>
                </div>
                {/* Category Box End*/}
                {/* Category Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title"><Link to ='/'>Category title</Link></h4>
                    </div>
                    <div className='card-footer'>
                    Product Downloads: 2356
                    </div>
                </div>
                </div>
                {/* Category Box End*/}
                {/* Category Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title"><Link to ='/'>Category title</Link></h4>
                    </div>
                    <div className='card-footer'>
                    Product Downloads: 2356
                    </div>
                </div>
                </div>
                {/* Category Box End*/}
            </div>
            <div className='row mb-2'>
                {/* Category Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title"><Link to ="/category/python/1">Category title</Link></h4>
                    </div>
                    <div className='card-footer'>
                    Product Downloads: 2356
                    </div>
                </div>
                </div>
                {/* Category Box End*/}
                {/* Category Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title"><Link to ='/'>Category title</Link></h4>
                    </div>
                    <div className='card-footer'>
                    Product Downloads: 2356
                    </div>
                </div>
                </div>
                {/* Category Box End*/}
                {/* Category Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title"><Link to ='/'>Category title</Link></h4>
                    </div>
                    <div className='card-footer'>
                    Product Downloads: 2356
                    </div>
                </div>
                </div>
                {/* Category Box End*/}
                {/* Category Box */}
                <div className='col-12 col-md-3 mb-4'>
                <div className="card">
                    <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4 className="card-title"><Link to ='/'>Category title</Link></h4>
                    </div>
                    <div className='card-footer'>
                    Product Downloads: 2356
                    </div>
                </div>
                </div>
                {/* Category Box End*/}
            </div>
            {/* Ens Categories */}

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>          

        </section>
    )
}

export default Categories;         