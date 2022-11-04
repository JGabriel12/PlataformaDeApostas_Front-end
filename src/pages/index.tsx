export default function Home() {
  
  fetch('http://localhost:3333/pools/count')
  .then(response => response.json)
  .then(data => {
    console.log(data);
  })

  return (
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora deserunt. Molestias, unde? Repellendus iusto ducimus dignissimos quos repellat? Unde suscipit officia, saepe repellendus placeat harum! Amet ipsum voluptatibus quaerat. </h1>
  )
}
