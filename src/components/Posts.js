import React, { Component } from 'react';
import User  from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';


export default class Posts extends Component {
    InstaService = new InstaService(); // добавили сервис в конструктор класса, все данные с instaservice.js записались в переменную.  это просто новый синтаксис ES9-10
    state = {
        posts: [],
        error: false,
        loading: true
    }

// когда компонент уже  построился
componentDidMount() {
 this.updatePosts();
}

updatePosts() {
    this.InstaService.getAllPosts() //запускает сервис, получил promice ( получили данные)
    .then(this.onPostsLoaded) // запускает эту функцию и передает сразу ей данные( то что получил от сервера )
    .catch(this.onError);
}
// когда загрузили данные обрабатываем их 
onPostsLoaded = (posts) => { // получаем посты с базы данных
 this.setState({
     posts,   // posts:  posts 
     error: false,
     loading: false
 })
}
onError = (err) => {
    this.setState({
        error: true,
        loading: false
    })
}
// чтобы автоматичеки формироват посты
renderItems(arr) {
    return arr.map(item => {
        const {name, altname, photo, src, alt, descr, id} = item; // вытащили переменную из объекта 
        return (
         <div key={id} className='post'>  {/* key нужно, чтобы реакт не обновлял старые данные */}
            <User
            src = {photo}
            alt = {altname}
            name= {name}
            min />
            <img src={src} alt={alt} />
            <div className='post__name'>
                {name}
            </div>
            <div className='post__descr'>
                {descr}
            </div>
      </div>
        )
    })
}

  render () {
      const {error,posts,loading} = this.state;
      if (error) {
          return <ErrorMessage/>
      }
       if (loading && !error){
             return <ErrorMessage />
       }
      const items  = this.renderItems(posts); //тут все посты, которые сформируются
      
    return (
      <div className ='left'>
          {items}
      </div>

    )
  }
}



// то что изменяется в динамике это STATE, те данные которые не меняются  - это props 


// жизенные циклы 

      //  1. появление компонента
       // 2. обновление компонента ( добавление новых )
       // 3. удаление компонента
       // 4. ошибка внутри компонента