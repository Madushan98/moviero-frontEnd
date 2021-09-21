import React from 'react';

import './adminHome.scss'
import AnalyticTabs from '../../../components/admin-analytic-tabs/adminAnalyticTabs' 
import AdminUserList from '../../../components/admin-userList/adminUserList';

class AdminPage extends React.Component {



    render() {
        return (
            <section className="admin-home">
         
                            <AnalyticTabs/>
                            <AdminUserList/>
            </section>
        )
    }
}


export default AdminPage;