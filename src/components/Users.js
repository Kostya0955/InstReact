import React, {Component} from 'react'
import User from './User'
import InstaService from '../services/instaservice';

export default class  Users extends Component {
  InstaService = new InstaService();
  state = {
    prof: [],
    error: false
  }
  componentDidMount(){
    this.updateUsers();
  }

  updateUsers() {
    this.InstaService.getAllPosts()
    .then(this.onUsersLoaded)
    .catch(this.onError);
  }

  onUsersLoaded = (prof) => {
    this.setState({
      prof,
      error: false
    })
  }
  onError = (err) => {
    this.setState({
      error: true
    })
  }
  renderItems(arr){
    return  arr.map(item => {
      const {main,name,photo,alt,id} = item;
      
      return(
        
        <div  key={id} className='right'>
          <User
          main = {main}
            min
            id = {id}
            src={photo}
            alt={alt}
            name={name}/>
          </div>
      )
    })
  }
  render() {
    const {error, prof} = this.state
    const items = this.renderItems(prof);
     const new_item = items.slice(1);
    return(
      <div>
      {items[0]}
      < div className = 'users__block' >
        {new_item}
      </div>
      </div>
    )
  }
}