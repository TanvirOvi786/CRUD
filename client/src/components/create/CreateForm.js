import React, { useRef } from 'react';
import { Create } from '../../APIservices/crudServices';
import { ErrorCogo, isEmpty, SuccessCogo } from '../../helper/ValidHelper';

function CreateForm() {

    let ProductsName, ProductsCode, Img, unitPrice, Qty, TotalPrice = useRef();
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

            Create(Products_Name, Products_Code, Products_Img, Unit_Price, Products_Qty, Total_Price)
                .then((Result) => {
                    if (Result === true) {
                        SuccessCogo("Data Save Success!");
                        ProductsName.value = "";
                        ProductsCode.value = "";
                        Img.value = "";
                        unitPrice.value = "";
                        Qty.value = "";
                        TotalPrice.value = "";
                    } else {
                        ErrorCogo("Request failed Try Again");
                    }
                });

        }




    }


    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-4 p-2">
                    <label>Products Name</label>
                    <input ref={(input) => ProductsName = input} type="text" className='form-control' />
                </div>
                <div className="col-md-4 p-2">
                    <label>Products Code</label>
                    <input ref={(input) => ProductsCode = input} type="text" className='form-control' />
                </div>
                <div className="col-md-4 p-2">
                    <label>Products Image</label>
                    <input ref={(input) => Img = input} type="text" className='form-control' />
                </div>
                <div className="col-md-4 p-2">
                    <label>Products Unit Price</label>
                    <input ref={(input) => unitPrice = input} type="text" className='form-control' />
                </div>
                <div className="col-md-4 p-2">
                    <label>Products Qty</label>
                    <input ref={(input) => Qty = input} type="text" className='form-control' />
                </div>
                <div className="col-md-4 p-2">
                    <label>Total Price</label>
                    <input ref={(input) => TotalPrice = input} type="text" className='form-control' />
                </div>
            </div>
            <br />
            <div className='row'>
                <div className="col-md-4 p-2">
                    <button onClick={SaveData} className='btn w-100 btn-primary'>Save</button>
                </div>
            </div>
        </div>
    );
}

export default CreateForm;