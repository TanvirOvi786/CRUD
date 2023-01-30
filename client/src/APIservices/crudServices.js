import axios from "axios";

export function Create(ProductsName, ProductsCode, Img, unitPrice, Qty, TotalPrice) {
    let URL = "/api/v1/createProducts";
    let postBody = {
        ProductsName: ProductsName,
        ProductsCode: ProductsCode,
        Img: Img,
        unitPrice: unitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice

    }

    return axios.post(URL, postBody).then((res) => {
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    }).catch((err) => {
        console.log(err);
        return false;
    });
}
export function Read() {
    let URL = "/api/v1/readProducts";
    return axios.post(URL).then((res) => {
        if (res.status === 200) {
            return res.data['data'];
        }
    }).catch((err) => {
        console.log(err);
        return false;
    });

}
export function Update(id) {
    let URL = "/api/v1/updateProducts/+id";
    let postBody = {
        ProductsName: ProductsName,
        ProductsCode: ProductsCode,
        Img: Img,
        unitPrice: unitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    }
    return axios.post(URL, postBody).then((res) => {
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    }).catch((err) => {
        console.log(err);
        return false;
    });
}
export function Detele(id) {
    let URL = "/api/v1/deleteProducts/" + id;
    return axios.post(URL).then((res) => {
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    }).catch((err) => {
        console.log(err);
        return false;
    });
}