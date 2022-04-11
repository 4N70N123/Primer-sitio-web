    
    // Para obtener el valor de un elemento por su clase se usa .querySelector(".nombreDeLaClase")


    var calcular = document.getElementById("calculador");
 
    calcular.addEventListener('click',sumar);

    function sumar() {
        let numero1 = document.getElementById("num1").value;
        let numero2 = document.getElementById("num2").value;
        let a = parseFloat(numero1);
        let b = parseFloat(numero2);
        let resultado = document.getElementById("Valorfinal");
        let operacion = document.getElementById("opera");
        let res;
        let opera = `${operacion.value}`;
        switch(opera){
            case "Sumar":
                res = a+b;
            break;
            case "Restar":
                res = a-b;
            break;
            case "Multiplicar":
                res = a*b;
            break;
            case "Dividir":
                res = a/b;
            break;
        }
        resultado.value=Math.round(res*1000)/1000;
    }
    