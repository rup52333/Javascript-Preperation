


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];








const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  


function countDown(params) {
  let tempDate=new Date();
  let tempYear=new Date().getFullYear();
  let tempMonth=new Date().getMonth();
  let tempDay=new Date().getDate();
  let tempTime=new Date().getTime();
 const futureDate=new Date(tempYear,tempMonth,tempDay+10,11,30,0);
 const year=futureDate.getFullYear();
 let month=futureDate.getMonth();
 let date=futureDate.getDate();
 let time=futureDate.getTime();
 let t=time-tempTime;
 let oneDay=24*60*60*1000;
 let oneHour=60*60*1000;
 let oneMinute=60*1000;
 let oneSecond=1000;
 let days=Math.floor(t/oneDay);
 let hours=Math.floor((t%oneDay)/oneHour)
 let minutes=Math.floor((t%oneHour)/oneMinute)
 let seconds=Math.floor((t%oneMinute)/1000)
const values=[days,hours,minutes,seconds]

 function format(item) {
 if(item<10){
  return (item=`0${item}`)   
 }
 return item;

 }
 items.forEach((item,index)=>{
  item.innerHTML=format(values[index])
  
  })

}

setInterval(() => {
  countDown()
}, 1000);


countDown();



