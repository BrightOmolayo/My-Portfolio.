// function that exports  the appended homepage contents
function homePage () {
  const content = document.getElementById('content')

  const heading = document.createElement('h1')
  heading.textContent = 'Bright Omolayo'
  content.appendChild(heading)

  const image = document.createElement('img')
  image.src = '../image/myPicture.jpg'
  content.appendChild(image)

  const paragraph1 = document.createElement('p')
  paragraph1.textContent = 'A front-end developer. I like developing beautiful, engaging, and accessible websites.'
  content.appendChild(paragraph1)
}

export { homePage }
