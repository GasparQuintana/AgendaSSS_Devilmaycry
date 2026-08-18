document.addEventListener('DOMContentLoaded', function (){


const calendarElement = document.getElementById('calendario');
 const calendar = new FullCalendar.Calendar(calendarElement, {
 initialView: 'dayGridMonth',

        locale: 'es',
        headerToolbar:false,


});


document.getElementById('prev').addEventListener('click', ()=>{
    calendar.prev();
});
document.getElementById('next').addEventListener('click', ()=>{
    calendar.next();
});




calendar.render();

});
