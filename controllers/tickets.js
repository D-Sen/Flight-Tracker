const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}


function newTicket(req, res) {
        res.render('tickets/new', { flightId: req.params.id , title: 'Ticket Detail' });
}


function create(req, res) {
    flightId = req.params.id;
    req.body.flight = flightId;
    console.log(req.body.seat);
    console.log(req.body.price);

    Ticket.create(req.body, function (err, ticket) {
        res.redirect(`/flights/${flightId}`);
    });
}


