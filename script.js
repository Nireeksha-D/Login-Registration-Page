function message(){
    document.getElementById('form-example').addEventListener('submit', function(event) {
        event.preventDefault();
      
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        // alert(`Email: ${email}\nPassword: ${password}`);
        console.log("Name",name)
        console.log("Password",password)
      });
}
function register(){
    document.getElementById('form-example').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password=document.getElementById('password').value;
        console.log("Name :",name)
        console.log("Email :",email)
        console.log("Password :",password)
      });
}