
let icon =document.getElementById("icon");
icon.onClick=function(){
    document.body.classList.toggle("dark-theme");

}
function changemode(){
    if(document.body.classList.contains("dark-theme")){
        document.body.classList.remove("dark-theme");
        icon.innerText = "sun";
    }else{
        document.body.classList.add("dark-theme");
        icon.innerText = "moon";
    }
}
//coupon//



let popupCloseButton=document.querySelector('#couponClose')
popupCloseButton.addEventListener('click',()=>{
    document.querySelector('#coupon').style.display='none';
})

//location & weather//

let x = document.getElementById('out');
            let y = document.getElementById('weather');

            function geolocation(){
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(showPosition)
                }else{
                    x.innerText = "Geo Not Supported"
                }
            }

            function showPosition(data){
                console.log(data);
                let lat = data.coords.latitude;
                let long = data.coords.longitude;

                const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                ///api calling
                fetch(url,{method: 'GET'})
                //return promise
                .then((res) => res.json())
                //return data
                .then((data) => {
                    console.log(data)
                    let city = data.city.name
                    let temp = data.list[0].temp.day
                    y.innerText = `  ${city} /  ${temp} °C`
                })
            }
