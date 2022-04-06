    
    var hola = prompt("Este archivo sí está enlazado");
    
    var numero1 = document.getElementByName("numero-1");
    var numero2 = document.getElementByName("numero-2");
    var calcular = document.getElementByName("boton");
    var resultado = document.getElementByName("Resultado");
    var operacion = document.getElementByName("operacion");
    var res;
    var a = numero1.textContent;
    var b = numero2.textContent;

    

    calcular.onclick = function(e) {
        switch(operacion){
            case "Sumar":
                res = parseFloat(a) + parseFloat(b);
            break;
            case "Restar":
                res = parseFloat(a) - parseFloat(b);
            break;
            case "Multiplicar":
                res = parseFloat(a) * parseFloat(b);
            break;
            case "Dividir":
                res = parseFloat(a) / parseFloat(b);
            break;
        }
        resultado.textContent = res;
    }