// imports the homepage contents
import { homePage } from '../homePage.js'
import { aboutContent } from '../image/about.js'
import { homeContent } from './modules.js/home.js'
import { projectContent } from './modules.js/projects.js'
// call the imported function to execute it whe the page loads
document.addEventListener('DOMContentLoaded', homePage)

// switch function to change the tabs when clicked on
document.addEventListener('DOMContentLoaded', function () {
  const tabsContainer = document.getElementById('content2')
  // function to switch between tabs

  function switchTab (tab) {
    tabsContainer.innerHTML = ''
    tabsContainer.appendChild(tab)
  }

  // Event listeners for clicks
  // home
  document.getElementById('home').addEventListener('click', function () {
    switchTab(homeContent())
  })
  // about
  document.getElementById('about').addEventListener('click', function () {
    switchTab(aboutContent())
  })
  // menu
  document.getElementById('project').addEventListener('click', function () {
    switchTab(projectContent())
  })

  // initial tab view
  switchTab(homeContent)
})
