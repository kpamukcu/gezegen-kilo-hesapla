fetch('data.json')

    .then(response => response.json())
    .then(veri => {
        let form = document.getElementById('form')
        form.addEventListener('submit', function (form) {
            form.preventDefault();
            let arka = document.getElementById('row')
            arka.style.backgroundColor="rgba(255, 255, 255, .1)"
            let f1 = document.getElementById("kilo").value
            let f2 = document.getElementById('gezegen').value


            let foto = document.getElementById('foto')
            let info = document.getElementById('info')

            foto.src = `${veri[f2][1]}`
            info.innerText = `Ağırlık: ${f1*veri[f2][0]/9.81}`
        })
    })