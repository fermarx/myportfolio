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
function showCategory(categoryName) {
  var i, categorycontent, categorylinks;
  categorycontent = document.getElementsByClassName("category");
  for (i = 0; i < categorycontent.length; i++) {
    categorycontent[i].style.display = "none";
  }
  categorylinks = document.getElementsByClassName("tab");
  for (i = 0; i < categorylinks.length; i++) {
    categorylinks[i].className = categorylinks[i].className.replace(" active", "");
  }
  document.getElementById(categoryName).style.display = "block";
  event.currentTarget.className += " active";
}
