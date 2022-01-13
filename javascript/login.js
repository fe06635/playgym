$(document).ready(function() {
    $('#loginComplete').click(function() {
        var id=$('#id').val();
        var pass=$('#password').val();
        if(id=="") {
            alert('아이디를 적어주세요.');
            $('#id').focus();
            return false;
        }
        if(pass=="") {
            alert('비밀번호를 적어주세요.');
            $('#password').focus();
            return false;
        }
        $('#login').submit();
    });
});