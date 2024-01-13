import {Link} from 'react-router-dom';
// Assets
import logo from '../../logo.svg';
import Sidebar from './Sidebar';
function Wishlist(){
    return (
        <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9 col-12 mb-2'>
                        <div className='row'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>product</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/></Link>
                                            <p><Link>Django</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td><button className='btn btn-danger btn-sm'>Remove</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/></Link>
                                            <p><Link>Flask</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td><button className='btn btn-danger btn-sm'>Remove</button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/></Link>
                                            <p><Link>Python</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td><button className='btn btn-danger btn-sm'>Remove</button></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <Link><img src={logo} className="img-thumbnail" width='80' alt="..."/></Link>
                                            <p><Link>Reactjs</Link></p>
                                        </td>
                                        <td>Rs. 500</td>
                                        <td><button className='btn btn-danger btn-sm'>Remove</button></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Wishlist ; 