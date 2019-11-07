const uuidv1 = require('uuid/v1');
const nodemailer = require('nodemailer');
const emailService = require('./emailService');

db = require('../data/db');


function sendEmail(info, id){
  var email = emailService.createEmail('http://localhost:3000/api/applications/confirm/'); /* +id */

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS
        }
      });
      
      var mailOptions = {
        from: process.env.EMAIL,
        to: info.email,
        subject: 'Confirm Your application ',
        /* html fyrir nedan tengir okkur vid emailService. Thar sem stadfestingarposturinn er. */
        html: email,
        attachments: [{
          filename: 'facebook.png',
          path: 'public/images/facebook@2x.png',
          cid: 'uniqueFacebook' //same as in html img source
        }, {
          filename: 'instagram.png',
          path: 'public/images/instagram@2x.png',
          cid: 'uniqueInstagram',
        }, {
          filename: 'linkedin.png',
          path: 'public/images/linkedin@2x.png',
          cid: 'uniqueLinkedIn',
        }, {
          filename: 'background.png',
          path: 'public/images/bg.jpg',
          cid: 'uniqueBackground',
        }, {
          filename: 'reboot.png',
          path: 'public/images/reboothack_default_transparent_cropped.png',
          cid: 'uniqueReboot',
        },
      ]
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports.Apply = function(info, callback){
    id = uuidv1();
    var query = "INSERT INTO team_member VALUES ($1, $2, $3, $4, $5, $6, $7, $8);";
    vaLues = [id, info.name, info.email, info.study, info.school, info.tShirt, info.food, info.team]

    db.query(query, vaLues, (err, res) => {
        if (err) {
            console.log(err.stack)
            callback(400);
        } else {
            sendEmail(info, id);
            callback(200);
        }
    });
}

module.exports.CheckId = function(id, cb, errcb){
    var query1 = "SELECT * FROM team_member WHERE id = $1";
    var query2 = "UPDATE team_member SET confirmed=true WHERE id = $1";
    var values = [id];

    db.query(query1, values, (err, res) => {
        if(err || res == undefined || res.rows.length == 0){
            console.log(err);
                      
            errcb();
            return;
        }
        db.query(query2, values, (err, res) => {
          cb(res[0]);
        });
    });
}