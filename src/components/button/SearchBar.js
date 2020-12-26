import React ,{ Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {connect} from 'react-redux';
import {addUser,addPhotos} from '../../redux/actions'
import ReactSearchBox from 'react-search-box'
import Axios from 'axios';
const REACT_APP_SERVER_URL=process.env.REACT_APP_SERVER_URL;

var data = [
  ] 
var count=0;
  class SearchBar extends Component {

 
       componentDidMount(){
         if(count===0)
         {
          const  responseLogin =  Axios.get(REACT_APP_SERVER_URL+`user/AllUsers` )
          .then(res => {
           // console.log(res);
  
            res.data.map(function(item, i){
  
              data.push({key:item.id,value:item.name})
            })
          })
         }
         count++;
 
        //console.log("isimleer",data);
}

      submitFriend =(search)=> {

        // const  responseLogin =  Axios.put(`http://localhost:3000/users/friends`+{params:{id:this.props.loginData.content.content[0].id}},search.key )
        // .then(res => {
        //  // console.log(res);

        // })


        console.log("bastı",search)
        }
    
      render() {
        return (
            <div style={{width:"50%",height:"30%"}}>
          <ReactSearchBox
            placeholder="Arama"
            data={data}
            onSelect ={record => this.submitFriend(record)}
           // callback={record => console.log("bastı")}
          />

            </div>

        )
      }
}
function mapStateToProps(state)
{
	return{
    loginData:state.mainReducer.byIds,
	}
}
export default connect(mapStateToProps, {addUser,addPhotos})(SearchBar);
