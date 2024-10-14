/*
  GET    - hämtar data, okypterat
  POST   - skriva en data, krypterat i en body 
  PUT    - uppdatera HELA ett objekt
  PATCH  - uppdaterar delar av ett objekt
  DELETE - tar bort ett objekt
*/

const post = {
  tittle: 'my post',
  body: 'hej hej bla bla'
}

const getPosts = () => {

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })

}

const addPost = () => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: json.stringify(post)
    })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  
  }

  const updatePost = () => {

    fetch('https://jsonplaceholder.typicode.com/posts/5', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: json.stringify(post)
    })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  
  }


  const patchpost = () => {

    fetch('https://jsonplaceholder.typicode.com/posts/5', {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: json.stringify(( title: 'new awesome title' ))
    })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  
  }

  const deletePost = () => {

    fetch('https://jsonplaceholder.typicode.com/posts/5', {
      method: 'DELETE'
    })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  
  }

//getPosts()
//addPosts()
//updatePost()
patchpost()