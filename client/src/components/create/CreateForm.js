import React, { Fragment, useRef } from 'react';
import { Create } from '../../APIservices/crudServices';
import { ErrorCogo, isEmpty, SuccessCogo } from '../../helper/ValidHelper';
import FullscreenLoader from '../common/FullscreenLoader';
import { useNavigate } from 'react-router-dom';

function CreateForm() {

    let ProductsName, ProductsCode, Img, unitPrice, Qty, TotalPrice, Loader = useRef();
    const navigate = useNavigate();
    const SaveData = () => {

        let Products_Name = ProductsName.value;
        let Products_Code = ProductsCode.value;
        let Products_Img = Img.value;
        let Unit_Price = unitPrice.value;
        let Products_Qty = Qty.value;
        let Total_Price = TotalPrice.value;



        if (isEmpty(Products_Name)) {
            ErrorCogo("Products Name Require")
        } else if (isEmpty(Products_Code)) {
            ErrorCogo("Products Code Require")
        }
        else if (isEmpty(Products_Img)) {
            ErrorCogo("Products Image Require")
        }
        else if (isEmpty(Unit_Price)) {
            ErrorCogo("Products Unit Price Require")

        } else if (isEmpty(Products_Qty)) {
            ErrorCogo("Products Qty Require")

        } else if (isEmpty(Total_Price)) {
            ErrorCogo("Products Total Price Require");
        } else {
            Loader.classList.remove('d-none')
            Create(Products_Name, Products_Code, Products_Img, Unit_Price, Products_Qty, Total_Price)
                .then((Result) => {
                    Loader.classList.add('d-none')
                    if (Result === true) {
                        SuccessCogo("Data Save Success!");
                        navigate("/");
                    } else {
                        ErrorCogo("Request failed Try Again");
                    }
                });

        }




    }


    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header pb-0">
                                <h4 className="animated fadeInUp">Create Product</h4>
                            </div>
                            <div className="card-body">
                                <div className='row'>
                                    <div className="col-md-4 p-2">
                                        <label className="animated fadeInUp">Products Name</label>
                                        <input ref={(input) => ProductsName = input} type="text" className='form-control animated fadeInUp' />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label className="animated fadeInUp">Products Code</label>
                                        <input ref={(input) => ProductsCode = input} type="text" className='form-control animated fadeInUp' />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label className="animated fadeInUp">Products Image</label>
                                        <input ref={(input) => Img = input} type="text" className='form-control animated fadeInUp' />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label className="animated fadeInUp">Products Unit Price</label>
                                        <input ref={(input) => unitPrice = input} type="text" className='form-control animated fadeInUp' />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label className="animated fadeInUp">Products Qty</label>
                                        <input ref={(input) => Qty = input} type="text" className='form-control animated fadeInUp' />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label className="animated fadeInUp">Total Price</label>
                                        <input ref={(input) => TotalPrice = input} type="text" className='form-control animated fadeInUp' />
                                    </div>
                                </div>
                                <br />
                                <div className='row'>
                                    <div className="col-md-4 p-2">
                                        <button onClick={SaveData} className='btn w-100 animated fadeInUp btn-primary'>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-none' ref={(div) => Loader = div}>
                <FullscreenLoader />
            </div>
        </Fragment>

    );
}

export default CreateForm;