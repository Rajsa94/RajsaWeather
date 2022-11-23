const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_stetus = document.getElementById('temp_stetus');
const temp = document.getElementById('temp');






const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;


    if (cityVal == '') {
        city_name.innerText = `Plz Write The Name Beefor Search`;

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=299249200aeb08108dd02cedc9cd35ea`;
            const responce = await fetch(url);
            const data = await responce.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`

            temp.innerText = arrData[0].main.temp;
            temp_stetus.innerText = arrData[0].weather[0].main;
        } catch{
            city_name.innerText = `Plz Write The Name Beefor Search`;

        }

    }
}



submitBtn.addEventListener('click', getInfo)