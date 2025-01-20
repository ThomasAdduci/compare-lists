function compararListas() {
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
  }

  function copiarResultados() {
    const comunes = [...document.querySelectorAll('#result li')].map(item => item.textContent).join('\n');
    navigator.clipboard.writeText(comunes).then(() => {
      alert('Resultados copiados al portapapeles');
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const resultList = document.getElementById("result");
    resultList.innerHTML = "<li>Aquí verás los elementos comunes.</li>";
  });

  document.getElementById('refreshBtn').addEventListener('click', function () {
    document.getElementById('list1').value = '';
    document.getElementById('list2').value = '';
  });
  