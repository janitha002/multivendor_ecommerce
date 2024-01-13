// Packages
import {Link} from 'react-router-dom';
// Assets
import logo from '../logo.svg';
function OrderSuccess(props){
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 offset-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <p><i className='fa fa-check-circle text-success fa-3x'></i></p>
                            <h3 className='text-success'>Thanks for the Orders</h3>
                            <p className='mt-'>
                                <Link to="/" className='btn btn-primary'>Home</Link>
                                <Link to="/customer/dashboard" className='btn btn-secondary ms-2'>Dashboard</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default OrderSuccess;