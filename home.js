import React from 'react';
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: " ",
            lastname: "",
            phoneno:"",
            email:"",
            details: []
        };
    }

    adddetails = () => {

        if (this.state.firstname === "" || this.state.lastname === "") {
            alert("enter all details");
        } else {
            alert(this.state.email);
            // var arr = new Array(); 
            let oldarray = localStorage.getItem("emp");
            let arr = new Array();
            if(oldarray != null){
                arr = JSON.parse(oldarray);
            }
            arr.push({ firstname: this.state.firstname, lastname: this.state.lastname, phoneno: this.state.phoneno,email:this.state.email });
            localStorage.setItem("emp", JSON.stringify(arr));

        }

    }

    setnames = async (e) => {
       await this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }
    render() {
        return (
            <div>
                <label />first name
                <input type="text" name="firstname" onChange={this.setnames} /><br />
                <label />last name
                <input type="text" name="lastname" onChange={this.setnames} /><br />
                <label />phone number
                <input type="text" name="phoneno" onChange={this.setnames} /><br />
                <label />email id
                <input type="text" name="email" onChange={this.setnames} /><br />
                <button onClick={this.adddetails}>Submit</button>
            </div>
        );
    }
}
export default Page;