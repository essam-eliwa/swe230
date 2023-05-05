class FormValidator {
    constructor(form) {
      this.form = form;
      this.inputs = this.form.querySelectorAll('input');
      this.errors = {};
    }
  
    validate() {
      for (let i = 0; i < this.inputs.length; i++) {
        let input = this.inputs[i];
        let name = input.name;
        let value = input.value.trim();
  
        if (value === '') {
          this.errors[name] = 'This field is required';
        } else if (name === 'email' && !this.isValidEmail(value)) {
          this.errors[name] = 'Please enter a valid email address';
        }else if(name === 'password' && value.length < 6){
            this.errors[name] = 'password must have a minimum of 6 characters';
        }
      }
  
      return this.errors;
    }
  
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
  
  //test
  // Usage example:
  const formElement = document.querySelector('form');
  const formValidator = new FormValidator(formElement);
  
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const errors = formValidator.validate();
  
    if (Object.keys(errors).length === 0) {
      formElement.submit();
    } else {
      // Display errors to the user
      console.log(errors);
      document.getElementsByClassName('error')[0].innerHTML = errors['password'];
    }
  });
  