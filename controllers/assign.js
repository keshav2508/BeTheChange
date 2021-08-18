const Volunteer = require('../models/volunteers');
const Requests = require('../models/helpSeeker');

exports.getVolBuddies = (req, res, next) => {
  Volunteer.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('volunteersList', {
        volntrs: rows,
        pageTitle: 'All Volunteers',
        volAdded: 'false'
      });
    })
    .catch(err => console.log(err));
};
