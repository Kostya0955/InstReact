import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Palette extends Component {
    InstaService = new InstaService(); // добавили сервис в конструктор класса, все данные с instaservice.js записались в переменную.  это просто новый синтаксис ES9-10
    state = {
        photos: [],
        error: false
    }
    // когда компонент уже  построился
componentDidMount() {
 this.updatePhotos();
}

updatePhotos() {
    this.InstaService.getAllPhotos() //запускает сервис, получил promice ( получили данные)
    .then(this.onPhotosLoaded) // запускает эту функцию и передает сразу ей данные( то что получил от сервера )
    .catch(this.onError);
}
// когда загрузили данные обрабатываем их 
onPhotosLoaded = (photos) => { // получаем посты с базы данных
 this.setState({
     photos,   // posts:  posts 
     error: false
     
 })
}
onError = (err) => {
    this.setState({
        error: true
    })
}
// чтобы автоматичеки формироват посты
renderItems(arr) {
    return arr.map(item => {
      const {src, alt, id} = item;
        return (
            <img src={src} alt = {alt} key={id}></img>
        )
    })
}
render() {
       const {error,photos} = this.state;
      if (error) {
          return <ErrorMessage/>
      }
      const items  = this.renderItems(photos); //тут все посты, которые сформируются

    return (
      <div className ='palette'>
          {items}
      </div>

    )

}
}