// function that exports  the appended homepage contents
function homePage () {
  const homePagecontent = document.getElementById('content')

  const heading = document.createElement('h1')
  heading.textContent = 'Bright Omolayo'
  homePagecontent.appendChild(heading)

  const image = document.createElement('img')
  image.src = '../image/myPicture.jpg'
  homePagecontent.appendChild(image)

  const paragraph1 = document.createElement('p')
  paragraph1.textContent = 'A front-end developer. I like developing beautiful, engaging, and accessible websites.'
  homePagecontent.appendChild(paragraph1)
}

console.log()

export { homePage }
