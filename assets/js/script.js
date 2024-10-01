document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('itens-list-form');
    const productInput = document.getElementById('product');
    const itensList = document.getElementById('list');
    const warningMessage = document.getElementById('warning-message');
    const closeWarning = document.getElementById('close-warning'); 

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const productName = productInput.value.trim();
        console.log(productName);

        if (productName === '') {
            alert("Por favor, adicione um nome de produto.")
            return;
        }

        const listItem = document.createElement('div');
        listItem.classList.add("list-item");
        listItem.innerHTML = `
            <input type="checkbox" name="" id="">
                <span>${productName}</span>
                <button type="button" onclick="">
                    <img src="./assets/icons/delete-02-stroke-rounded.svg" alt="lixeira">
                </button>
        `;
        itensList.appendChild(listItem);

        productInput.value = '';

        listItem.querySelector('button').addEventListener('click', function() {
            listItem.remove();
            showWarning();
        });

        listItem.querySelector('button').addEventListener('click', function() {
            const checkboxes = itensList.querySelectorAll('input[type="checkbox"]:checked');

            checkboxes.forEach(function(checkbox) {
                checkbox.parentElement.remove();
            });

            if (checkboxes.length > 0) {
                showWarning();
            }
        })

        function showWarning() {
            warningMessage.classList.remove('hidden');

            setTimeout(function() {
                warningMessage.classList.add('hidden');
            }, 1500);
        }

        closeWarning.addEventListener('click', function() {
            warningMessage.classList.add('hidden');
        })
    });
});
    
    

