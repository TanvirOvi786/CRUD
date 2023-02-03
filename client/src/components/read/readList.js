
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Detele, Read } from '../../APIservices/crudServices';
import { ErrorCogo, SuccessCogo } from '../../helper/ValidHelper';
import FullscreenLoader from '../common/FullscreenLoader';





function ReadList(props) {

    let [DataList, SetDataList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        Read().then((Result) => {
            SetDataList(Result);
        })
    }, [])

    const DeleteItem = (id) => {
        Detele(id).then((Result) => {
            if (Result === true) {
                SuccessCogo("Delete Success!");
                navigate("/");
            } else {
                ErrorCogo("Request Failed Try Again");
            }
        })
    }
    const UpdateItem = (id) => {
        navigate("update/" + id);
    }

    if (DataList.length >= 0) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card list-card">
                            <div className="card-header pb-0">
                                <h4>Product List</h4>
                            </div>
                            <div className="card-body">

                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Products Name</th>
                                            <th>Products Code</th>
                                            <th>Products Image</th>
                                            <th>Products Unit Price</th>
                                            <th>Products Qty</th>
                                            <th>Total Price</th>
                                            <th>Delete/Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            DataList.map((item, i) => {
                                                return (
                                                    <tr>
                                                        <td>{item.ProductsName}</td>
                                                        <td>{item.ProductsCode}</td>
                                                        <td><img className='list-img' src={item.Img} alt="" /></td>
                                                        <td>{item.unitPrice}</td>
                                                        <td>{item.Qty}</td>
                                                        <td>{item.TotalPrice}</td>
                                                        <td>
                                                            <button onClick={DeleteItem.bind(this, item._id)} className='btn text-danger'><i className="fa fa-2x fa-trash-alt" /></button>
                                                            <button onClick={UpdateItem.bind(this, item._id)} className='btn text-success'><i className="fa fa-2x fa-edit" /></button>
                                                        </td>

                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    } else {
        return (
            <div>
                <FullscreenLoader />
            </div>
        )
    }
}

export default ReadList;