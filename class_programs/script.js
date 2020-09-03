var container = document.createElement('div');
container.setAttribute("class", "container");

var form = document.createElement('form');
form.setAttribute('onsubmit', 'data()');


var inputName1 = createFormGroupElement( 'text', 'full-name', 'Full Name');
var inputName2 = createFormGroupElement('text', 'e-mail', 'e-mail');
var subject = createFormGroupElement( 'text', 'subject', 'subject');
var message = createFormGroupElement( 'text', 'message', 'message');


var button = document.createElement('button');
button.innerText = 'Submit';
button.classList.add('btn', 'btn-primary');
button.type = 'submit';
form.append(inputName1, inputName2, subject, message, button);

container.appendChild(form);
document.body.appendChild(container);

function createFormGroupElement(type, placeholder, name) {
    var formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    
    var element = document.createElement("input");
    element.setAttribute('class', 'form-control');
    element.setAttribute('type', type);
    element.setAttribute('placeholder', placeholder);
    element.setAttribute('name', name);
    
    
    formGroup.append(element);
    return formGroup;
}



