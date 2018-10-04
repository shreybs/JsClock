function setTime(){
  const secondHand = document.querySelector(".secHand");
  const minuteHand = document.querySelector(".minHand");
  const HourHand = document.querySelector(".hourHand");

  const time = new Date();
  const seconds = ((time.getSeconds() / 60 ) * 360)+90;
  const minutes = ((time.getMinutes() / 60 ) * 360)+90;
  const hours = ((time.getHours() / 12 ) * 360)+90;
  
  secondHand.style.transform = `rotate(${seconds}deg)`;
  minuteHand.style.transform = `rotate(${minutes}deg)`;
  HourHand.style.transform = `rotate(${hours}deg)`;
  
}

setInterval(setTime,1000);