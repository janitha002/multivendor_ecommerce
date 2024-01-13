import {Link} from 'react-router-dom';
function Sidebar(){
    return(
        <div class="list-group">
                            <Link to="/Seller/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                            <Link to='/Seller/products' className="list-group-item list-group-item-action">products</Link>
                            <Link to='/Seller/add-product' className="list-group-item list-group-item-action">Add product</Link>
                            <Link to="/Seller/orders" className="list-group-item list-group-item-action">Orders</Link>
                            <Link to='/Seller/customers' className="list-group-item list-group-item-action">Customers</Link>
                            <Link to='/Seller/reports' className="list-group-item list-group-item-action">Reports</Link>
                            <Link to='/Seller/profile' className="list-group-item list-group-item-action">profile</Link>
                            <Link to='/Seller/change-password' className="list-group-item list-group-item-action">Change Password</Link>
                            <a href="#" className="list-group-item list-group-item-action text-danger">Logout</a>
                        </div>
    )
}

export default Sidebar;