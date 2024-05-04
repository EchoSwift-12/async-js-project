const postID = document.getElementById('postID')
const getPostBtn = document.getElementById('getPostBtn')
const showTitle = document.getElementById('showTitle')

let tempPostId = 0
const savepostID = (event)=>{
    tempPostId = event.target.value
    
}
const displayPostTitle  = async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${tempPostId}`)
  const data = await response.json()
  const {title} = data
  showTitle.innerText = `Post Title: ${title}`
}


postID.addEventListener('change', savepostID)

getPostBtn.addEventListener('click', displayPostTitle)