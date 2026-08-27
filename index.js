document.addEventListener('DOMContentLoaded', function (){


const calendarElement = document.getElementById('calendario');
 const calendar = new FullCalendar.Calendar(calendarElement, {
 initialView: 'dayGridMonth',

        locale: 'es',
        headerToolbar:false,
        datesSet: function(info) {

    const fecha = info.view.currentStart;

    const nombreMes = fecha.toLocaleDateString('es-ES', {
        month: 'long'
    });

    document.getElementById('monthex').textContent =
        nombreMes.toUpperCase();
},


});


document.getElementById('prev').addEventListener('click', ()=>{
    calendar.prev();
});
document.getElementById('next').addEventListener('click', ()=>{
    calendar.next();
});




calendar.render();

});
