import mongoose from 'mongoose'
const { Schema, model } = mongoose

const CalendarSchema = new Schema(
    {
        title: { type: String, required: true },
        color: { type: String, required: true},
        start: { type: Date},
        end: { type: Date },
        user: {
            id: { type: mongoose.ObjectId, required: true},
            name: { type: String, required: true}
        },
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