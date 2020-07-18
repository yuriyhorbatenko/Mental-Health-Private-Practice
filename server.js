const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const Event = require('./models/event');

// const routes = require("./routes");
const app = express();

connectDB();

//init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ exteneded: false }));
app.use(
    '/graphql',
    graphqlHttp({
        schema: buildSchema(`
            type Event {
                _id: ID!
                name: String!
                comment: String!
                time: Float!
                date: String!
            }

            input EventInput {
                name: String!
                comment: String!
                time: Float!
                date: String!
            }

            type RootQuery {
                events: [Event!]!
            }

            type RootMutation {
                createEvent(eventInput: EventInput): Event
            }

            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `),
        rootValue: {
            events: () => {
                Event.find()
                .then(events => {
                    return events.map(event => {
                        return { ...event._doc, _id: event._doc._id.toString() };
                    })
                })
                .catch(err => {
                    throw err;
                });
            },
            createEvent: (args) => {
                const event = new Event({
                    name: args.eventInput.name,
                    comment: args.eventInput.comment,
                    time: +args.eventInput.time,
                    date: new Date(args.eventInput.date)
                });
                return event
                    .save()
                    .then(result => {
                        console.log(result);
                        return { ...result._doc, _id: event.id };
                    }).catch(err => {
                        console.log(err);
                        throw err;
                    });
            }
        },
        graphiql: true
    })
    );

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port' + PORT));
