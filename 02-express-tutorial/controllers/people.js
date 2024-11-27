const { people } = require('../data');


const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};


const addPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: 'Please provide a name' });
    }
    const newPerson = { id: people.length + 1, name };
    people.push(newPerson);
    res.status(201).json({ success: true, data: newPerson });
};


const getPersonById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const person = people.find(p => p.id === id);
    if (!person) {
        return res.status(404).json({ success: false, message: 'Person not found' });
    }
    res.status(200).json({ success: true, data: person });
};


const updatePerson = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;

    const person = people.find(p => p.id === id);
    if (!person) {
        return res.status(404).json({ success: false, message: 'Person not found' });
    }
    person.name = name;
    res.status(200).json({ success: true, data: person });
};


const deletePerson = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const personIndex = people.findIndex(p => p.id === id);

    if (personIndex === -1) {
        return res.status(404).json({ success: false, message: 'Person not found' });
    }
    people.splice(personIndex, 1);
    res.status(200).json({ success: true, data: people });
};

module.exports = { getPeople, addPerson, getPersonById, updatePerson, deletePerson };
