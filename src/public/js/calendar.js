$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prew next today',
            center: DataTransferItemList,
            right: 'month, agendaWeek, agendaDay'
        },
        defaultDate: Date(),
        newLinks: true,
        editable: true,
        eventLimit: true,
        eventCick: function(event) {

            $('#visualizar #id').text(event.id)
            $('#visualizar title').text(event.title)
            $('#visualizar title').text(event.start.format('DD/MM/YYYY HH:mm:ss'))
            $('#visualizar title').text(event.title.format('DD/MM/YYYY HH:mm:ss'))
            $('#visualizar title').model('show'))
            return false
            
        },

        selctable: true,
        selectHelper: true,
        select: function(start, end) {
            $('#cadastrar #start').vañ(moment(start).format('DD/MM/YYYY HH:mm:ss'))
            $('#cadastrar #end').val(moment(end).format('DD/MM/YYYY HH:mm:ss'))
            $('#cadastrar').model('show')
        },
        events: {
                let registros_eventos = req
                for(let registros_eventos = mysql)
            }
        }
    })
})
  