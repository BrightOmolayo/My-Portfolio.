export function aboutContent () {
  const aboutTab = document.getElementById('about')
  // eslint-disable-next-line no-const-assign
  aboutTab = document.createElement('div')
  aboutTab.classList.add('about')
  aboutTab.innerHTML = '<h1>About me </h1>'

  return aboutTab
}
