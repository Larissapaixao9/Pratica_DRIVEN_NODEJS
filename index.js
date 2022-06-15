import express from 'express'
import dayjs from "dayjs";
const server =express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];
  let now=dayjs();
  let data=dayjs(now).format('MM/DD/YYYY')
  console.log(data)
  const testeDate="11/15/2022"
  let cont=0;

server.get("/holidays",(request,response)=>{
    response.send(holidays)
})

server.get("/is-today-holiday",(request,response)=>{
    
    for(let i=0;i<holidays.length;i++){
        if(data===holidays[i].date){
            response.send(`Sim, hoje é ${holidays[i].name}`)
           
        }
        else{
            //response.send('Não, hoje não é feriado')
            cont++
        }
    }
    if(cont===holidays.length){
        response.send('Não, hoje não é feriado')
    }
    
})



server.listen(4000)