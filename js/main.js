$(function(){
    function isEmail(email){
        var pattern = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
        return pattern.test(email);
    }
    function firstIsUppercase(str) {
        if (typeof str !== 'string' || str.length === 0) {
          return false;
        }
        if (str[0].toUpperCase() === str[0]) {
          return true;
        }
        return false;
      }
    $('#btn').click(function(){
        var invalidMessage="";
        $("#error").html("");  
        if($('#name').val()==''){
            invalidMessage+=' Name is not entering';
        }
        if(firstIsUppercase($('#name').val())==false){
            invalidMessage+=' Name is not correct';
        }
        if($('#surName').val()==''){
            invalidMessage+=' Surname is not entering';
        }
        if(firstIsUppercase($('#surName').val())==false){
            invalidMessage+=' Surname is not correct';
        }
        if($("#email").val()==""){
            invalidMessage+=' Email is not entering';
        }
        if(isEmail($('#email').val())==false){
            invalidMessage+=' Email is not correct';
        }
        if($('#password').val().length<6){
            invalidMessage+=' Password length minimum 6';
        }
        if($('#rePassword').val()!==$('#password').val()){
            invalidMessage+='Password is not match ';
        }
        if(invalidMessage!=''){
            $("#error").html(invalidMessage);
        }
        else{
            const person={
                namee:$('#name').val(),
                surname:$('#surName').val(),
                email:$("#email").val(),
                password:$('#password').val()
            }
            setItemToLS(person);
        }
    })
    function setItemToLS(person){
        localStorage.setItem('user',JSON.stringify(person));  
    };
});
const all=document.getElementById('first');
function selectAll(){
    window.getSelection().selectAllChildren(all);
}
setTimeout(() => {
    $(document).ready(selectAll);
}, 3000);
