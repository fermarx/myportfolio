function showTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

function showCategory(category) {
  // get all projects
  var projects = document.getElementsByClassName("project");
  
  // if category is "all", show all projects
  if (category === "all") {
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.display = "block";
    }
  } else {
    // otherwise, hide all projects
    for (var i = 0; i < projects.length; i++) {
      projects[i].style.display = "none";
    }
    // show projects with matching category class
    var matchingProjects = document.getElementsByClassName(category);
    for (var i = 0; i < matchingProjects.length; i++) {
      matchingProjects[i].style.display = "block";
    }
  }

  // remove active class from all tabs
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  // add active class to clicked tab
  var clickedTab = document.querySelector('.tab[onclick="showCategory(\'' + category + '\')"]');
  clickedTab.classList.add("active");
}

function addShowMoreButton() {
  const taskLists = document.querySelectorAll('.task-list');
  for (const taskList of taskLists) {
    const button = document.createElement('button');
    button.innerText = 'Show more...';
    button.addEventListener('click', () => {
      taskList.classList.toggle('show-more');
      if (button.innerText === 'Show more...') {
        button.innerText = 'Show less';
      } else {
        button.innerText = 'Show more...';
      }
    });
    taskList.parentElement.insertBefore(button, taskList.nextSibling);
  }
}
addShowMoreButton();
