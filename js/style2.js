$(document).ready(function () {
    var errorMsg = '';
    
    function validation(inputField) {
        var clear= [false,false,false,false,false,false];

        if (inputField.val() == '' || inputField.val() == null) {

            errorMsg = 'Input field Can Not Be Empty';

        } else {
            if ($(inputField).attr('id') === 'firstname' || $(inputField).attr('id') === 'lastname') {

                if( /^[A-Za-z]+$/.test(inputField.val()) == false){
    
                    errorMsg = 'Only letters allowed';
    
                } else {
                    clear[0] = true;
                }
    
            } else if ($(inputField).attr('id') === 'username') {

                if(/\s/g.test(inputField.val())){
        
                    errorMsg = 'whitespaces not allowed';
        
                } else if(inputField.val().length < 3 || inputField.val().length > 20){
    
                    errorMsg = 'length must be between 3 to 20 characters';
        
                } else if(!isNaN(inputField.val())){
        
                    errorMsg = 'Only numbers not allowed';

                } else {
                    clear[1] = true;
                }
                
            } else if ($(inputField).attr('id') === 'email') {
    
                if(/\s/g.test(inputField.val())){
        
                    errorMsg = 'whitespaces not allowed';
        
                } else if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(inputField.val()) == false) {
                    
                    errorMsg = 'Invalid Email' ;
    
                } else {
                    clear[2] = true;
                }

            } else if ($(inputField).attr('id') === 'password') {
                
                if(inputField.val().length < 8  || inputField.val().length > 20){

                    errorMsg = 'Password should be between 8 to 20 characters long';
        
                } else {
                    clear[3] = true;
                }

            } else if ($(inputField).attr('id') === 'confirmpwd') {
                
                if (inputField.val() !== $('#password').val()) {
                    errorMsg = 'Password not match';
                    
                } else {
                    clear[4] = true;
                }

            } else if ($(inputField).attr('id') === 'tnc') {
                
                if ( $(inputField).is(':checked') == false ) {

                    errorMsg = 'You must accept all the terms and conditions';

                } else {
                    clear[5] = true;
                }

            }

        }

            if (clear.indexOf(true) != -1) {
                $(inputField).addClass("error-solved");
                $(inputField).removeClass("input-error");
                $(inputField).siblings('p.error').text("");
                
            } else {
                $(inputField).removeClass("error-solved");
                $(inputField).addClass("input-error");
                $(inputField).siblings('p.error').text(errorMsg);
            }

    }

    $(document).on("input","#registration-form .input-validation",function() {

        var vId = $("#"+$(this).attr('id'));
        validation(vId);

    });

  $(document).on("click", `#registration-form label[for="tnc"]`, function () {

    if ($('#tnc').is(':checked')) {

        $("#tnc").attr('checked', true);

    } else {

        $("tnc").attr('checked', false);

    }

  });

});

