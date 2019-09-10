require('dotenv').config()
const { SESSION_SECRET, SERVER_PORT, GMAIL_USER, GMAIL_PASSWORD } = process.env
const express = require('express');
const { json } = require('express')
const nodemailer = require('nodemailer')
const expressStaticGzip = require('express-static-gzip')
const sm = require('sitemap')
// const fs = require('fs')
const session = require('express-session')

const app = express();
const path = require('path')
const sitemap = sm.createSitemap ({
  hostname: 'https://missionarymonthly.com',
  cacheTime: 31536000,
  urls: [
    { url: '/',  changefreq: 'daily', priority: 1.0 },
    { url: '/Home',  changefreq: 'daily', priority: 0.5 },
    { url: '/Shop',  changefreq: 'daily',  priority: 0.9 },
    { url: '/About Us',  changefreq: 'daily', priority: 0.6 },
    { url: '/Contact',  changefreq: 'daily', priority: 0.8 },
    { url: '/More',  changefreq: 'daily', priority: 0.7 },
    { url: '/Login',  changefreq: 'daily', priority: 0.6 },
    { url: '/Register',  changefreq: 'daily', priority: 0.7 }
  ]
});
app.use(express.static(`${__dirname}/../build`));
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(`/build/client`, expressStaticGzip(`/build/client`, {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz'
  }],
  orderPreference: ['br', 'gz']
}));
app.use(json())

const port = SERVER_PORT || 4333
app.listen(port, console.log('The server is running on port', port))

async function mail(req) {
  let transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${GMAIL_USER}`,
      pass: `${GMAIL_PASSWORD}`
    }
  })

  const output = `
  <h2>Somebody is reaching out to you Mom</h2>
  <h3>Contact Details</h3>
  <p>Name: ${req.body.name}</p>
  <p>Email: ${req.body.from}</p>
  <h3>Message</h3>
  <p> ${req.body.message}</p>
  `

  const mailOptions = {
    from: `${GMAIL_USER}`,
    to: `${GMAIL_USER}`,
    subject: `Contact`,
    text: ``,
    html: output
  }

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log('Error in mail:', err)
    }
  })
}

app.post('/send-email', (req) => {
  mail(req)
})

app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})