const Volunteer = require('../models/volunteers');
const Request = require('../models/helpseeker');
// var nodemailer = require('nodemailer');
//
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'keshav.ec19@nsut.ac.in',
//     pass: 'Keshav@2508'
//   }
// });

exports.getRequests = (req, res, next) => {
  Request.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('requestsList', {
        requests: rows,
        pageTitle: 'All Requests',
        path: '/requests'
      });
    })
    .catch(err => console.log(err));
};

exports.getRequest = (req, res, next) => {

    const askId = req.params.ask_id;
    Request.findById(askId)
      .then(([row]) => {
        res.render('req_details', {
          req: row[0],
          pageTitle: 'Request',
          path: '/ask-List'
        });
      })
      .catch(err => console.log(err));
};

exports.postAddRequest = (req, res, next) => {
  const name = req.body.ask_name;
  const age = req.body.ask_age;
  const address = req.body.ask_address;
  const mobile = req.body.ask_mobile;
  const email = req.body.ask_email;
  const gender = req.body.ask_gender;
  const state= req.body.ask_state;
  const status= "open";
  const request = new Request(null,name,age,address, mobile,email,gender,state,status);
  request
    .save()
    .then(()=>{
      // Volunteer.fetchVolEmails()
      //   .then(([row,feildData])=>{
      //     console.log(row);
      //     for(var i=0;i<row.length;i++){
      //       let email=row[i].vol_email;
      //       console.log(email);
      //       let mailOptions = {
      //         from: 'keshav.ec19@nsut.ac.in',
      //         to: email,
      //         subject: 'Sending Email using Node.js',
      //         text: 'That was easy!'
      //       };
      //       transporter.sendMail(mailOptions, function(error, info){
      //         if (error) {
      //           console.log(error);
      //         } else {
      //           console.log('Email sent: ' + info.response);
      //         }
      //       });
      //     }
      //   })
      //   .catch(err => console.log(err));
      res.redirect('/ask-List');
    })
    .catch(err => console.log(err) );
};

// exports.sendMail = (req,res,next) => {
//   Volunteer.fetchVolEmails()
//     .then(([row,feildData])=>{
//       console.log(row);
//       for(var i=0;i<row.length;i++){
//         let email=row[i].vol_email;
//         console.log(email);
//         let mailOptions = {
//           from: 'keshav.ec19@nsut.ac.in',
//           to: email,
//           subject: 'Sending Email using Node.js',
//           text: 'That was easy!'
//         };
//         transporter.sendMail(mailOptions, function(error, info){
//           if (error) {
//             console.log(error);
//           } else {
//             console.log('Email sent: ' + info.response);
//           }
//         });
//       }
//     })
//     .catch(err => console.log(err));
// }
