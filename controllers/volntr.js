const Volunteer = require('../models/volunteers');
const Requests = require('../models/helpSeeker');

exports.getVolunteers = (req, res, next) => {
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

exports.postAddVolunteers = (req, res, next) => {
  const name = req.body.vol_name_fr +" "+ req.body.vol_name_la;
  const age = req.body.vol_age;
  const address = req.body.vol_address;
  const mobile = req.body.vol_mobile;
  const email = req.body.vol_email;
  const gender = req.body.vol_gender;
  const imageUrl = req.body.vol_imageUrl;
  const password = req.body.vol_pass;
  console.log(name)
  const volunteer = new Volunteer(null,name,age,address, mobile,email,gender,imageUrl,password);
  volunteer.save()
    .then(()=>{
      Volunteer.fetchAll()
        .then(([rows, fieldData]) => {
          Volunteer.fetchLast()
          .then(([row]) => {
            console.log(row[0]);
            res.render('volunteersList', {
              vol:row[0],
              volntrs: rows,
              pageTitle: 'All Volunteers',
              volAdded: 'true'
            });
          })

        })
        .catch(err => console.log(err));

    })
    .catch(err => console.log(err) );
};
