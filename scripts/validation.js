// Wait for the document to be ready
$(document).ready(function() {
   
   


    // Form validation when user submits
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
       
        var isValid = true;
       
        // Hide all errors first
        $('.error').hide();
        $('input, textarea').removeClass('invalid');
       
        // Check name
        var name = $('#name').val().trim();
        if (name.length < 2) {
            $('#nameError').show();
            $('#name').addClass('invalid');
            isValid = false;
        }
       
        // Check email
        var email = $('#email').val().trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $('#emailError').show();
            $('#email').addClass('invalid');
            isValid = false;
        }
       
        // Check phone
        var phone = $('#phone').val().trim();
        var phonePattern = /^[\d\s\-\+\(\)]+$/;
        if (!phonePattern.test(phone) || phone.replace(/\D/g, '').length < 10) {
            $('#phoneError').show();
            $('#phone').addClass('invalid');
            isValid = false;
        }
       
        // Check message
        var message = $('#message').val().trim();
        if (message.length < 10) {
            $('#messageError').show();
            $('#message').addClass('invalid');
            isValid = false;
        }
       
        // If everything is valid
        if (isValid) {
            $('#successMessage').fadeIn();
            $('#contactForm')[0].reset();
           
            setTimeout(function() {
                $('#successMessage').fadeOut();
            }, 5000);
        }
    });


    // Check name when user leaves the field
    $('#name').on('blur', function() {
        if ($(this).val().trim().length < 2) {
            $('#nameError').show();
            $(this).addClass('invalid');
        } else {
            $('#nameError').hide();
            $(this).removeClass('invalid');
        }
    });


    // Check email when user leaves the field
    $('#email').on('blur', function() {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test($(this).val().trim())) {
            $('#emailError').show();
            $(this).addClass('invalid');
        } else {
            $('#emailError').hide();
            $(this).removeClass('invalid');
        }
    });


    // Check phone when user leaves the field
    $('#phone').on('blur', function() {
        var phone = $(this).val().trim();
        var phonePattern = /^[\d\s\-\+\(\)]+$/;
        if (!phonePattern.test(phone) || phone.replace(/\D/g, '').length < 10) {
            $('#phoneError').show();
            $(this).addClass('invalid');
        } else {
            $('#phoneError').hide();
            $(this).removeClass('invalid');
        }
    });


    // Check message when user leaves the field
    $('#message').on('blur', function() {
        if ($(this).val().trim().length < 10) {
            $('#messageError').show();
            $(this).addClass('invalid');
        } else {
            $('#messageError').hide();
            $(this).removeClass('invalid');
        }
    });


});
