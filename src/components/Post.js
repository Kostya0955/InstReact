import React, { Component } from 'react'
import User from './User'

export default class Post extends Component {
  render () {
    return (
      <div className='post'>
        <User
          src ='https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630'
          alt ='prince'
          name= 'Harry_the_prince'
          min />
        <img src={this.props.src} alt={this.props.alt} />
        <div className='post__name'>
            some account
        </div>
        <div className='post__descr'>
            dsfsdfsdfkjsdflsdjfl dsf ksdfjsdlkf dskfsdlfj
        </div>
      </div>
    )
  }
}
