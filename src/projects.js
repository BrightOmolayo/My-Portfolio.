export function projectContent () {
  const projectTab = document.getElementById('project')
  // eslint-disable-next-line no-const-assign
  projectTab = document.createElement('div')
  projectTab.classList.add('project')
  projectTab.innerHTML = '<a href="https://brightomolayo.github.io/My-Projects/"> About me </a>'

  return projectTab
}
