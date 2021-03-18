import React from 'react';
class Disp extends React.Component {
    state = {
        viewarr:[]
    }
   async componentDidMount() {
        let temp = await localStorage.getItem("emp");
        if(temp != null)
        {
            let fulad = JSON.parse(temp);
            this.setState(
                {
                    viewarr:fulad
                }
            );
            let l = this.props.match.params.id;
            console.log(l);
            let f = this.state.viewarr.filter(function(value,index){
                return index.toString() === l;
            });
            console.log(f);
            this.setState({
                     viewarr:f
                 });
        }
    
        
        // console.log(l);
       
        // console.log(f);
        // localStorage.setItem("detdata", JSON.stringify(f))
        // this.setState({
        //     viewarr:f
        // });
    }
    render() {
        return (<div>
            <h1>dsadasdasdasdasdasd</h1>
            <table border="3">
                <tr>
                    <td>firstname</td>
                    <td>lastname</td>
                    <td>phone number</td>
                    <td>email id</td>
                </tr>
                
                {this.state.viewarr.map((item)=>{
                    return(
                        
                        <tr>
                            <td>
                                {item.firstname}
                            </td>
                            <td>
                                {item.lastname}
                            </td>
                            <td>
                                {item.phoneno}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    
                    );
                })}
            </table>
            </div>
            );
    }
} 
export default Disp;