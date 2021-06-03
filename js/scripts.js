$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const traits = $("select#traits").val();
    const color = $("select#color").val();
    
    let celebrity =""
  if (traits && color) {
    if (traits === '1' && color ==='1'){
      celebrity = "Ryan Reynolds"
    }
    else if (traits === '1' && color ==='2') {
      celebrity = "Tom Holland"
    }
    else if (traits === '2' && color ==='1') {
      celebrity = "Homer Simpson"
    }
    else if (traits === '2' && color ==='2') {
      celebrity = "Spongebob Squarepants"
    }
  }
    
    else {
      alert("Please select one")
    } 

    $("#crush").text(celebrity);
    $("#celebrity").show();

    
  });
});