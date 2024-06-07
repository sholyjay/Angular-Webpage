    let formD = {
        name:'',
        email:'',
        mobile:'',
        message:'',
    };

    $(document).ready(function() {
        $('#submitBtn').click(function(e) {
            e.preventDefault();
            // Validate the form data
            if(validateForm()) {
                // Pass the form data to the submitForm function
                submitForm();
            }        
        });

        function validateForm() {
            var valid = true;
            // Validate name
            var name = $('#name').val();
            if (!name || name.trim() === '') {
                $('#name').addClass('is-invalid');
                valid = false;
            } else {
                formD.name = name;
                $('#name').removeClass('is-invalid');
            }

            // Validate email
            var email = $('#email').val();
            if (!email || email.trim() === '' || !isValidEmail(email)) {
                $('#email').addClass('is-invalid');
                valid = false;
            } else {
                formD.email = email;
                $('#email').removeClass('is-invalid');
            }

            //validate Number
            var mobile = $('#mobile').val();
            if (!mobile || mobile.trim() === '' || !isValidMobile(mobile)) {
                $('#mobile').addClass('is-invalid');
                valid = false;
            } else {
                formD.mobile = mobile;
                $('mobile').removeClass('is-invalid');
            }

            // Validate message
            var message = $('#message').val();
            if (!message || message.trim() === '') {
                $('#message').addClass('is-invalid');
                valid = false;
            } else {
                formD.message = message;
                $('#message').removeClass('is-invalid');
            }

            return valid;
        }
        
        // Validate the email
        function isValidEmail(email) {
            var pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            return pattern.test(email);
        }

        function submitForm() {
            // Here, you can use the formD object to access the form data
            console.log(formD);
            // Add your code to submit the form data to the server or perform any other actions
        }
    });

    
