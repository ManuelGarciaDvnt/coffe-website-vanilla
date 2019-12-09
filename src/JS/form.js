window.onload = function(){

    //DOM catch
    var inputs = document.getElementsByClassName('contact__form-input');

    for(var i = 0; i<inputs.length; i++){
        inputs[i].addEventListener("keyup", function(){
            
            if(this.value>0 || this.value!=''){
                this.nextElementSibling.classList.add("active");
            }
            else if(this.value<=0 || this.value==''){
                this.nextElementSibling.classList.remove("active");
            }
        });
    }

    
};