// funcionalidad de materialize-select
$(document).ready(function() {
  $('select').material_select();
  // Initialize collapse button
  $('.btn-floating').sideNav();
  $('.modal').modal();
  $('#modal1').modal('open');
});


$(document).ready(function() {
  // splash
  setTimeout(function() {
    $('#splash').fadeIn(2000).fadeOut(2000);
  }, 500);

  // creando variables
  var $phone = $('#phone');
  var $btnNext = $('.btn-next');
  var $codVerify = $('#input-code');
  var $btnCode = $('.btn-code');
  var $phoneView = $('#phone-view');
  

  $phone.change(function() {
    // Activar btn, ingresando 10 digitos
    var valuePhone = $phone.val();
    valuePhone.length === 10 ? $btnCode.removeClass('disabled') : $btnCode.addClass('disabled');
  });

  // $codVerify.click(function() {
  //   valor = $phoneView.data(valuePhone);
  //   $phoneView.text('Enter the code send to ');
  // });
  
  // Generando código aleatorio
  function code() {
    var min = 100,
      max = 999,
      // formula matemática para determina un número aleatoria entre ds números;
      cod = Math.floor((Math.random() * (max - min + 1)) + min); 

    // Verficar que el código enviado sea igual del ingreso del input.
    $codVerify.change(function() {
      parseInt($codVerify.val()) === cod ? $btnNext.removeClass('disabled') : $btnNext.addClass('disabled');
    });
    return cod;
  }
  // click al btn Next para generar el cod.
  $btnCode.click(function() {
    alert('Tu código LAB-' + code());
  });


  /** formulario **/

  var $firstName = $('#inputFirstName');
  var $lastName = $('#inputLastName');
  var $email = $('#inputEmail');
  var $checked = $('#filled-in-box');
  
  var validateFirstName = false;
  var validateLastName = false;
  var validateEmail = false; 
  var validateChecked = false;  


  // Aqui indicar que se puede implementar la función como variable
  function activeButton() {
    if (validateFirstName && validateLastName && validateEmail && validateChecked) {
      $btnNext.removeClass('disabled');
    }
  }

  function desactiveButton() {
    $btnNext.addClass('disabled');
  } 

  $firstName.on('input', function(event) {
    if ($firstName.val().length > 2) {
      validateFirstName = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });

  $lastName.on('input', function(event) {
    if ($lastName.val().length > 2) {
      validateLastName = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });


  $email.on('input', function(event) {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });
  
 
  $checked.on('click', function(event) {
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
 
  // $btnNext.on('click', function(event) {
  //   event.preventDefault();
  //   localStorage.lastName = $lastName.val();
  //   localStorage.firstName = $firstName.val();
  //   localStorage.email = $email.val();
  //   localStorage.password = $password.val();
  // });
});
