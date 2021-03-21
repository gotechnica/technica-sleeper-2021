const axios = require('axios');
const Airtable = require('airtable');
const webhook = "XXX";

module.exports.index = async event => {
  const body = JSON.parse(event.body);
  const name = body.name;
  const company = body.company;
  const email = body.email;
  const message = body.message;
  await axios.post(webhook, {
    text: `New inbound sponsorship request. \nName: *${name}*\nCompany: ${company}\nEmail: ${email}\nMessage: ${message}`
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
    headers: {
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Credentials': true,
       }
  };
};


exports.process_emails = function(event, context, callback) {
  const body = JSON.parse(event.body)
  const email = body.email;
  const airtableAPIKey = 'XXX'
  const airtableBase = 'app4raQKdmoN34zFV';
  const airtableTable = body.table;
  const airtableColumn = body.column;

  const base = new Airtable({apiKey: airtableAPIKey}).base(airtableBase);

  let entry = {
    "fields": {}
  }

  entry.fields[airtableColumn] = email

  base(airtableTable).create([entry], function done(err) {
    if (err) {
      callback(err)
    } else {
      const response = {
        statusCode: 200,
        body: JSON.stringify({ records: email }),
        headers: {
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Credentials': true,
       }
      }
      callback(null, response)
    }
  });
}
