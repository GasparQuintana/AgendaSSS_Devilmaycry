document.addEventListener('DOMContentLoaded', function (){


const calendarElement = document.getElementById('calendar');
 const calendar = new FullCalendar.Calendar(calendarElement, {
 initialView: 'dayGridMonth',

        locale: 'es',
        aspectratio:2,
        contentHeight: 550,
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: ''
        },



});

calendar.render();

});