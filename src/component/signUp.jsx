import React, { Component } from 'react';

class SignUp extends Component {
    state = { 
        account:{ username:'',
         password:''}
      }
 
     handleSubmit =e=>{
         e.preventDefault();
         //call server
         console.log("submitted");
     }
     handleChange =({currentTarget:input})=>{
         const account = { ...this.state.account};
         account[input.name] = input.value;
         this.setState({account});
     }
     render() { 
         const {account} = this.state;
         return ( 
             <div className="card" style={{width: "18rem"}}>
                 <div className="card-body">
                     <h5 className="card-title">Register Here</h5>
                     <form onSubmit={this.handleSubmit}>
                         <div className="form-group">
                             <input 
                             value={account.username} 
                             onChange={this.handleChange}
                             id="username"
                             name="username" 
                             type="text" className="form-control"  
                             placeholder="Enter email"/>
                         </div>
                         <div className="form-group">
                             <input 
                             value={account.password} 
                             onChange={this.handleChange}
                             type="password" 
                             name="password"
                             id="password" className="form-control" 
                             placeholder="Password"/>
                         </div>
                         <div className="form-group">
                            <select class="custom-select">
                                <option selected>Select Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Transgender</option>
                            </select>
                         </div>
                         <button type="submit" className="btn btn-primary">Register</button>
                     </form>
                 </div>
             </div>
          );
     }
 }
 
export default SignUp;