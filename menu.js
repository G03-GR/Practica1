alert('Bienvenido/a a mi Calculadora')

function calcularResultado() {

    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var operacion = document.getElementById('operacion').value;
    var resultado;
  
    switch (operacion) {
      case 'su':
        resultado = n1 + n2;
        break;
      case 're':
        resultado = n1 - n2;
        break;
      case 'mu':
        resultado = n1 * n2;
        break;
      case 'di':
        resultado = n1 / n2;
        break;
      default:
        resultado = 'Operación inválida';
    }
  
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
  
    return false; 
  }