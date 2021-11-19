import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap"
import { connect } from "react-redux";
import { setCurrentRole, fetchUserRoles } from "../../../redux/userRole/userRole.action";

import './switch.scss'
class SwitchDropDown extends React.Component {

  
    getCurrentRole(role) {
          var formatRole = role.split("_", 2);
           console.log(formatRole);
        
        return formatRole[1];
    }

    getRoles(roles) {
      var  formatRoles = [];

        roles.map(role => {
            var splited = role.split("_", 2);
            formatRoles.push(splited[1]);
        })
        
     

        return formatRoles;
    }



    onChange(role) {
        
        console.log(this.props.currentRole)
       
  const {  setCurrentRole } = this.props;
    
    setCurrentRole(role);

    }




    render() {
   
      console.log("My Roles" + this.props.accounts.length);
      if(this.props.accounts.length === 2) {
return (
                <div>
            <DropdownButton size="sm" id="dropdown-basic-button" title="" >
                {
                    this.props.accounts.map((role,index) => {

                        return (
                            <Dropdown.Item key={index} onClick={()=>  this.onChange(role)} >{ role}</Dropdown.Item>

                      )

                    })
                
                
                }
   
    </DropdownButton>
        </div>
        )

      } else {
        return (
          <div>
            
         </div>
       )
      }
        
    }
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    loading: state.user.loading,
    currentRole: state.userRole.currentRole,
    accounts: state.userRole.accounts,
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
  
     fetchUserRoles: (userRoles) => dispatch(fetchUserRoles(userRoles)),
    setCurrentRole: (Role) => dispatch(setCurrentRole(Role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwitchDropDown);


