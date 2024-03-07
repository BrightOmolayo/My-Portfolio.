export function homeContent () {
  const homeTab = document.getElementById('home')
  // eslint-disable-next-line no-const-assign
  homeTab = document.createElement('div')
  homeTab.classList.add('home')
  homeTab.innerHTML = '<h1>Bright Omolayo </h1>'

  return homeTab
}
