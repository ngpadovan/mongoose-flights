const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports = {
    new: newTicket,
    create
}


async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id)
    res.render('tickets/new', { flight })
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id
        console.log(req.body)
        await Ticket.create(req.body)
        res.redirect(`/flights/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.redirect(`/flights/${req.params.id}tickets/new`)    }
}

