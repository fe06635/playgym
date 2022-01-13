$(document).ready(function() {
    allCheck();
    $('#registerComplete').click(function() {
        infoCheck();
    });
});
function infoCheck() {
    if(document.register.userid.value=="") {
        alert('사용자명을 입력해주세요');
        document.register.userid.focus();
        return;
    }
    if(document.register.id.value=="") {
        alert('아이디를 입력해주세요');
        document.register.id.focus();
        return;
    }
    if(document.register.pwd.value=="") {
        alert('비밀번호를 입력해주세요');
        document.register.pwd.focus();
        return;
    }
    if(document.register.pwd.value.length <8 || document.register.pwd.value.length>20) {
    	alert('8자리 ~ 20자리 이내로 입력해주세요');
    	document.register.pwd.value="";
        document.register.pwd.focus();
        return;
    }
    if(document.register.verify.value=="") {
        alert('비밀번호 확인을 입력해주세요');
        document.register.verify.focus();
        return;
    }
    if(document.register.pwd.value != document.register.verify.value) {
        alert('비밀번호가 맞지 않습니다. 비밀번호를 확인해주세요');
        document.register.verify.focus();
        return;
    }
    if(document.register.tel.value=="") {
        alert('휴대폰 번호를 입력해주세요');
        document.register.tel.focus();
        return;
    }
    if(!(document.register.age.checked)) {
        alert('나이 약관을 체크해주세요');
        document.register.age.focus();
        return; 
    }
    if(!(document.register.term.checked)) {
        alert('이용 약관을 체크해주세요');
        document.register.term.focus();
        return; 
    }
    if(!(document.register.privacy.checked)) {
        alert('개인정보 처리 방침을 체크해주세요');
        document.register.privacy.focus();
        return; 
    }
    $('#register').submit();
}

function allCheck() {
    $('#allCheck').click(function() {
        $('.chk_register').prop('checked',this.checked);
    });
}