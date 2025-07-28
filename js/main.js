// finding the date


// setting the time

setInterval(()=>{
    
let temp=new Date();
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let time=(temp.getHours()+":"+temp.getMinutes()+"-"+days[temp.getDay()]+" , "+temp.getDate()+" "+months[temp.getMonth()]+" "+temp.getFullYear());
    time=(temp.getHours()+":"+temp.getMinutes()+"-"+days[temp.getDay()]+" , "+temp.getDate()+" "+months[temp.getMonth()]+" "+temp.getFullYear());    
    document.querySelector('.date').innerHTML=time;
},1000)


// printing the searched city in console
let btn=document.querySelector('.search-icon')
let cityName=document.querySelector('.city-name')
btn.addEventListener("click",function(){
    console.log(cityName.value);
    document.querySelector(".city-display").innerHTML=cityName.value;
    getData()
    cityName.value="";

})

// fetching the data
async function getData(){
    try{
        let url="https://api.openweathermap.org/data/2.5/weather?q="+cityName.value+"&appid=775a28fc9a3c6e61fb09b796e391d179&units=metric";
        let responce=await fetch(url)
        let data=await responce.json()
        let arr=[data.name ,data.sys.country ,data.main.temp+"°" ,data.main.humidity+"%" ,data.main.pressure ,data.weather[0].description]
        console.log(arr)
        for (let i = 0; i < 6; i++) {
            if(i===2){
                document.querySelector(".value-"+(i+1)+"").innerHTML=arr[i]+"C";
            }
            else
            document.querySelector(".value-"+(i+1)+"").innerHTML=arr[i];
        }
        document.querySelector(".description").innerHTML=arr[5]
        document.querySelector(".degree").innerHTML=arr[2]
    }
    catch(error){
        console.log(error);
    }
}