// $("document").ready(function(){
//    $("#set").click(function(e)
//      {
//        e.preventDefault();
//        alert("You clicked submit ");
//        $("#msg").html("Why did you clicked me ?");
//     });

// // });
// $('form').mouseleve(function(e){
//   $('#msg').html("");
//   console.log("HEy is it working?")
// }

// );
$(".formFormat").click(function(){
  $('#msg').html("Enter your credentials!");
  $('#msg2').html("");
  $('#mg2').removeClass();
});
$(".formFormat.form-control").click(function(){
  
  $('#msg2').html("");
  $('#mg2').removeClass();
});
$("#set").click(function (e) {
  let uname = $('#usrname').val();
  let pass = $("#password").val();

  e.preventDefault();

  alert("Are you sure to continue? ");
  if (uname == '' || pass == '') {

    $('#msg').html("Are you trying to login yo?.Enter details dumb!");
    
  }
  
  else if (uname.length < 4 || pass.length < 4) {
    $('#msg').html("length shouldnt be less than 4")
  }

  if (uname!=''&& pass!='')
   {

  verify(uname,pass,function(){
      alert("Data base access simulated user verified");
      $('#msg2').html('Data base access simulated user verified')
      $("#msg2").addClass('alert-success');
  }
  ,function(){
       alert("Data base access simulated and user not registered")
       $('#msg2').html('Data base access simulated user not registered')
       $("#msg2").addClass('alert-danger');
  });


  // function verify(uname,pass,callback)
  //   {
  //      setTimeout(function(){
      
  //       if (uname == 'admin' && pass == '1234') {
  //         $('#msg').html("login succes~~~ waiting for Data base to Respond")
  //         callback();
  //       }
  //       else {
  //         $('#msg').html("User not registered")
  //            }


  //      },2000);
  //     }
  
      function verify(uname,pass,callback1,callback2)
      {
         setTimeout(function(){
        
          if (uname == 'admin' && pass == '1234') {
            $('#msg').html("login succes~~~ waiting for Data base to Respond")
            window.location.href='newlist.htm'
            callback1();
          }
          else {
            $('#msg').html("User not registered")
            callback2();
               }
  
           },2000);
        }    
      }  
  
});
