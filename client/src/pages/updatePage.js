import React from "react";
import AppNavbar from '../components/common/AppNavBar';
import UpdateForm from '../components/update/updateform'
import { useParams } from "react-router-dom";

const updatePage = () => {
    const paras = useParams();

    return (
        <div>
            <AppNavbar />
            <UpdateForm id={paras['id']} />
        </div>
    )
}
export default updatePage;