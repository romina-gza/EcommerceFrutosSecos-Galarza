//Algoritmo - Ingresar nombre (romi o cris) para Ingresar Cuenta
let userName = prompt('Ingresa tu nombre en minusculas. Para salir ingresa \' X \'.');
while (userName != 'X') {
    switch (userName) {
        case 'romina':
            for (let index = 1; index <= 3; index++) {
               password = prompt('Ingresa password' + ' ' + userName + '.' + '\nTendras solo 3 intentos\nIntento número: '+ index );
             
               if (password === 'password') {
                   
                alert(`Ingresaste a tu cuenta exitosamente ${userName}`);
            break; 
                
            } 
        }
                break;
         
        case 'cris':
            
         for (let index = 1; index <= 3; index++) {

             password = prompt('Ingresa pswd' + ' ' + userName + '.' + '\nTendras solo 3 intentos\nIntento número: '+ index );
             
               if (password === 'pswd') {
                   
                alert(`Ingresaste a tu cuenta exitosamente ${userName}`);
                break;
            } 
         }
                 
        break;
        default:
            alert('no te conozco');
            break;
    }
    prompt('Para salir ingresa \' X \'.');
    break;
}

// Algoritmo - "Ingresar producto" o "Buscar producto"

const ingresaProducto = prompt('Ingresa en minusculas, en singular y sin tildes, un producto. Para salir, ingresa X ');
while (ingresaProducto != "X") {
    switch (ingresaProducto) {
        case 'almendra': 
            alert('Ingresaste' + ' ' + ingresaProducto);
                break;
        case 'nuez':
            alert('Ingresaste' + ' ' + ingresaProducto);
                break;
        case 'chocolate':
            alert('Ingresaste' + ' ' + ingresaProducto);
                break;
        case 'leche de almendra':
            alert('Ingresaste' + ' ' + ingresaProducto);
                break;
        case 'mani':
            alert('Ingresaste' + ' ' + ingresaProducto);
                break;
        case 'mantequila de mani':
            alert('Ingresaste' + ' ' + ingresaProducto);
                break;
        case 'leche de coco':
            alert('Ingresaste' + ' ' + ingresaProducto);
                break;
        default:
            alert('Lo siento, tu producto no se encuentra disponible o no seguiste las intrucciones.\nRecuerda: Ingresa en minusculas, en singular y sin tildes, un producto.');
    
    }
    break;
}

//Calculadora con prompt en los parámetros - testeo 

const calculadora = (n1,operador,n2) => {
    n1 = parseInt(prompt('Para calcular ingresa un numero'));
    operador = prompt('Ingresa un operador, como + - / * ');
    n2 =  parseInt(prompt('Ingresar OTRO numero'));
    switch (operador) {
		case "+":
	alert("Tu resultado es" + " " + (n1 + n2));
            break;
        case "-": 
	alert("Tu resultado es" + " " + (n1 - n2));
            break;
		case "*":
	alert("Tu resultado es" + " " + (n1 * n2));
            break;
		case "/":
	            switch (n2) {
                case 0: 
                    alert('No se puede dividir por cero.');
                    break;
                default: 
                    alert("Tu resultado es" + " " + (n1 / n2));
                        break;
            } 
            break;
	default:
	alert("Error de sintaxis. Intenta otra vez y lee bien las instrucciones");
	break;
    }
}
calculadora();
