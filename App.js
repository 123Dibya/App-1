let url = ("https://picsum.photos/v2/list?page=2&limit=100")
let responce = fetch(url)
responce.then((v) => {
  return v.json()
}).then((picture) => {
  console.log(picture)
  ihtml = ""
  for (item in picture) {
    console.log(picture[item])
    ihtml += `
    <div class="card mx-2 my-2 "  style="width: 18rem;">
        <img src="${picture[item].download_url}" class="card-img-top" alt="image">
        <div class="card-body">
          <h5 class="card-title">Author Name-${picture[item].author}</h5>
          <a href="${picture[item].url}"class="btn btn-primary">Visit site</a>
          <a href="${picture[item].download_url}" class="btn btn-primary">Downlod</a>
        </div>
        </div> `
        
  }
  cardContainer.innerHTML = ihtml
})
