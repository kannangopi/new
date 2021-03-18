import React from 'react';
import { Link } from 'react-router-dom';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedarry: []
        };
    }
    async componentDidMount() {
        let temp = await localStorage.getItem("emp");

        if (temp != null) {
            let addarr = JSON.parse(temp);
            this.setState({
                savedarry: addarr
            });
            console.log(this.state.savedarry);

        }
    }

// details=(index)=>{

//     var x =this.state.savedarry;
//     var r=x.filter((function(value,id){
//         return id === index;    
//     }))
//     console.log(r);
//  localStorage.setItem("viewuser",JSON.stringify(r));
// }


    render() {
        return (
            <div>
                <table border="3">
                    <tbody>
                        <tr>
                            <td>
                                first name
                        </td>
                            <td>
                                last name
                        </td>
                            <td>
                                details
                        </td>
                        </tr>
                        
                        {this.state.savedarry.map((value,index) => {
                            return (
                                <tr>
                                    <td>
                                        {value.firstname}
                                    </td>
                                    <td>
                                        {value.lastname}
                                    </td>
                                    <td>
                                        <Link to={`/data${index}`}>view</Link>
                                        {/* <button onClick={()=>this.details(index)}>view</button> */}
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}
export default User;