function compararListas() {
  const spinner = document.getElementById("spinner");
  const buttonText = document.getElementById("buttonText");
  const compareButton = document.getElementById("compareButton");

  // Mostrar el spinner y ocultar el texto
  spinner.classList.remove("d-none");
  buttonText.classList.add("d-none");

  // Simular tiempo de procesamiento (reemplázalo con tu lógica real)
  setTimeout(() => {
      // Obtener las listas de los textarea
      const list1 = document.getElementById("list1").value.split("\n").map(item => item.trim().toLowerCase());
      const list2 = document.getElementById("list2").value.split("\n").map(item => item.trim().toLowerCase());

      // Filtrar las coincidencias entre ambas listas
      const comunes = list1.filter(item => list2.includes(item));

      // Mostrar el resultado
      const resultList = document.getElementById("result");
      resultList.innerHTML = ''; // Limpiar resultados previos

      if (comunes.length > 0) {
          comunes.forEach(item => {
              const listItem = document.createElement("li");
              listItem.textContent = item;
              resultList.appendChild(listItem);
          });
      } else {
          resultList.innerHTML = "<li>No hay elementos comunes</li>";
      }

      // Ocultar el spinner y mostrar el texto
      spinner.classList.add("d-none");
      buttonText.classList.remove("d-none");
  }, 500);
  }

  function copiarResultados() {
    const comunes = [...document.querySelectorAll('#result li')].map(item => item.textContent).join('\n');
    navigator.clipboard.writeText(comunes).then(() => {
      const successAlert = document.getElementById("successAlert");
  
      // Mostrar la alerta
      successAlert.classList.remove("d-none");
      successAlert.textContent = "Resultados copiados al portapapeles.";
  
      // Ocultar la alerta después de 3 segundos
      setTimeout(() => {
        successAlert.classList.add("d-none");
      }, 3000);
    }).catch(() => {
      alert('Error al copiar los resultados');
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const resultList = document.getElementById("result");
    resultList.innerHTML = "<li>Aquí verás los elementos comunes.</li>";
  });

  document.getElementById('refreshBtn').addEventListener('click', function () {
    document.getElementById('list1').value = '';
    document.getElementById('list2').value = '';
    const dangerAlert = document.getElementById("dangerAlert");
  
    // Mostrar la alerta
    dangerAlert.classList.remove("d-none");
    dangerAlert.textContent = "Se resetearon las listas a comparar.";

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      dangerAlert.classList.add("d-none");
    }, 3000);
  }).catch(() => {
    alert('Error al resetear listas.');
  });
  