// For adding comments
function addComments(id) {
  document.getElementById("viewComments").style.visibility = "visible";
  var addEventName = id.value + "<br>";
  var a = document.getElementById("userComments");
  document.getElementById("addEventNames").innerHTML =
    '<p style="padding:10px;background-color:white;">' +
    addEventName +
    "</p>" +
    document.getElementById("addEventNames").innerHTML;
  a.value = a.defaultValue;
}
//  For liked count
var numberOfClicks = 0;
function postLiked() {
  document.getElementById("likeBlog").innerHTML =
    `<i class="fa fa-thumbs-up" aria-hidden="true"></i>` + " Liked!";
  numberOfClicks += 1;
  if (numberOfClicks != 0) {
    if (numberOfClicks == 1) {
      document.getElementById("likeCount").innerHTML =
        numberOfClicks + " person likes this!";
    } else {
      document.getElementById("likeCount").innerHTML =
        numberOfClicks + " people have liked this!";
    }
  }
}
//  For edit button to change to save

var editMode = false;
function postEdit() {
  const paragraph = document.getElementById("paraText");
  const title = document.getElementById("titletext");
  var edit_button = document.getElementById("edit");

  if (editMode == false) {
    title.contentEditable = true;
    paragraph.contentEditable = true;

    edit_button.innerHTML = "Save " + `<i class="fa fa-save"></i>`;
    editMode = true;
  } else {
    title.contentEditable = false;
    paragraph.contentEditable = false;
    edit_button.innerHTML = "Edit " + `<i class="fa fa-edit"></i>`;
    editMode = false;
  }
}
