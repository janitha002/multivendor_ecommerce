import {Link} from 'react-router-dom';
// Assets
import SellerSidebar from './SellerSidebar';
function SellerProduct(props){
    return (
        <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-3 col-12 mb-2'>
                        <SellerSidebar />
                    </div>
                    <div className='col-md-9 col-12 mb-2'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <td colSpan="5">
                                            <Link to='/Seller/add-product' className="btn btn-primary"><i className='fa fa-plus-circle'></i>Add product</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>#</th>
                                        <th>product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Product Title</td>
                                        <td>500</td>
                                        <td>Piblished</td>
                                        <td>
                                            <a href="#" className='btn btn-info '>View</a>
                                            <a href="#" className='btn btn-primary ms-1 '>Edit</a>
                                            <a href="#" className='btn btn-danger ms-1 '>Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SellerProduct ; 