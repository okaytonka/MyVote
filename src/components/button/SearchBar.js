import React ,{ Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {connect} from 'react-redux';
import {addUser,addPhotos} from '../../redux/actions'
import ReactSearchBox from 'react-search-box'
import Axios from 'axios';

var data = [
  ] 

  class SearchBar extends Component {

 
      async componentDidMount(){

    const  responseLogin = await Axios.get(`http://localhost:3000/users/` )
        .then(res => {
         // console.log(res);

          console.log("isimleer0",res.data);
          res.data.map(function(item, i){
            console.log("isimleer",item.name);

            data.push({key:item.id,value:item.name})
          })
        })
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
            callback={record => console.log("bastı")}
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
