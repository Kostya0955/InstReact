export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/' // через _ говорится, что данный метод трогать нельзя 
    }
// запрос с сервера 
    getResourse = async(url) => { // наша функция асиннхронная, await  работает в связке с async
        const res = await fetch(`${this._apiBase}${url}`); // запрос к серверу. Res будет пустой. 
//код дальше не пойдет пока не получит ответ от fetch()
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return res.json(); // возвращается promise - обещание того, что данные придут в формате json
    }
// получать все посты 
    getAllPosts = async () => { //получает посты с базы данных 
        const res = await this.getResourse('posts/');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResourse('posts/'); // приходят все данные
        return res.map(this._transformPosts);   // из всех данных возвращаем только часть данных (фото)
    }
    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    }
}
