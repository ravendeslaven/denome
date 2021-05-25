import mongoose from 'mongoose'
const { Schema, model } = mongoose

const CalendarSchema = new Schema(
    {
        title: { type: String, required: true },
        theme: { type: String, default: 'Default'}, // Define calendar's theme
        languaje: { type: String, default: 'en'}, // Calendar's Languaje 
        format: { type: String, default: 'mm/dd/yyyy'}, // Date format
        titleFormat: { type: String, default: 'MM yyyy'}, // Date format for calendar title
        eventHeaderFormat: { type: String, default: 'MM d, yyyy'}, // Date format for calendar event's title
        firstDayOfWeek: { type: Number, default: 0},  // Displayed first day of the week. 0 (Sunday) - 6 (Saturday)
        todayHighlight: { type: Boolean, default: false}, // Highlight today's date in calendar
        sidebarDisplayDefault: {type: Boolean, default: true}, // Set default visibility of sidebar
        sidebarToggler: { type: Boolean, default: true}, // Display the button for toggling the sidebar
        eventDisplayDefault: { type: Boolean, default: true}, // Set default visibility of event lists
        eventListToggler: { type: Boolean, default: true }, // Display the button for toggling the event lists
        calendarEvents: [{
            id: { type: String, required: true}, // Event's id (required, for removing event) // Generar id con UUID
            description: { type: String }, // Description of event (optional)
            badge: { type: String }, // Event badge (optional)
            date: { type: Date, default: Date.now }, // Date of event
            type: { type: String, enum:
            ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5']  // Tipos de eventos
        }, // Type of event (event)
            color: { type: String }, // Event custom color (optional) // Crear input selector de colores y luego almacenar el codigo del color en una variable tipo String
            everyYear: { type: Boolean }, // Event is every year (optional)
        }],
        user: {
            id: { type: mongoose.ObjectId, required: true},
            name: { type: String, required: true}
        },
        proyect: {
            value: { type: Boolean}, // Boolean, Exists or does not exist
            id: { type: mongoose.ObjectId, ref: 'Proyect'}, // Referenced project id 
        }
    }, 
    {
        timestamps: true,
        versionKey: false,
    }
)


export default model('Calendar', CalendarSchema)


/* Advances steps on develop 
        events: {
            id: { type: ObjectId },
            groupId: {},
            allDay: { type: Boolean },
            start: { type: Date },
            end: { type: Date },
            startStr: {}, //ISO8601 string representation of the start date. If the event is all-day, there not be a time part
            endStr:{}, // ISO8601 string representation of the end date.
            title: { type: String, required: true },
            url: { type: String, required: true },
            classNames: { type: Array},
            editable: { type: Boolean},
            startEditable: { type: Boolean },
            durationEditable: { type: Boolean},
            resourceEditable: { type: Boolean }, // This lasted properties overriding the event eventStartEditable, eventDurationEditable and eventResourceEditable 
            display: { type: String, required: true}, // Propertie for display the calendar through some parameters -> 'auto', 'block', 'list-item', 'background', 'inverse-background', 'none
            overlap: { type: Boolean },
            constraint: { type: Object },
            backgroundColor: { type: String },
            borderColor: { type: String },
            textColor: { type: String},
            extendedProps: { type: Object }, // Extended options for your events, the extended options wil be available in the extendedProps hash of each Event Object.
            source: { type: Object },
        },
        groups: {

        },
        reminders: {

        },
        tasks: {

        },
        alerts: {

        },


*/