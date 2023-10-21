
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')



// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient()


const nodemailer = require('nodemailer');

// const smtpTransport = require('nodemailer-smtp-transport');
const transporter = nodemailer.createTransport({
  service : 'Gmail',
  auth: {
      user: 'helpermall245@gmail.com',
      pass: 'fjdhgibpnmiwvcdo'
  }
});


// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'suneelahmed413@gmail.com',
//       pass: '$uj0Ah321meed#babila061',
//     },
//   })
// );





// API END POINT 
// https://yz9wziqo31.execute-api.eu-north-1.amazonaws.com/master/api/blog


/****************************
* Start (Blogs) *
****************************/



/****************************
* GET (Blogs) *
****************************/
app.get('/api/blog', async function(req, res) {

  try {
    
    const params = {
      TableName : 'blogs',                    
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
     dynamoDb.scan(params , function(err , data){
      if(err) {
        res.json({message : err.message});
      }else{ 
        res.json(data)}
    })
    
    // Add your code here
  } catch (error) {
    res.json({message : 'Yahn Error Hai'})  
  }
});

/****************************
* Post (Create Blogs) *
****************************/
app.post('/api/blog', async function(req, res) {

  try {
      const params = {
      TableName : 'blogs',
      Item : {
        id: req.body.id,
        title : req.body.title,
        blogDesc : req.body.blogDesc,
        blogImg : req.body.blogImg
      }                
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
     dynamoDb.put(params , function(err , data){
      if(err) {
        res.json({message : err.message});
      }else{ 
        res.json(data)}
    })
    
    // Add your code here
  } catch (error) {
    res.json({message : 'Yahn Error Hai'})  
  }
});


/****************************
* Put (Edit Blogs) *
****************************/
app.put('/api/blog', async function(req, res) {

  try {
      const params = {
      TableName : 'blogs',
      Key : {
        id: req.body.id,
      },
      UpdateExpression: `set title = :value1, blogDesc = :value2, blogImg = :value3`,
      ExpressionAttributeValues: {
        ':value1': req.body.title,
        ':value2': req.body.blogDesc,
        ':value3': req.body.blogImg,
      },
      ReturnValues: 'UPDATED_NEW'                
    }

    dynamoDb.update(params, (err, data) => {
      if (err) {
        console.error('Error updating item:', err);
        res.status(500).send('Error updating item');
      } else {
        console.log('Item updated successfully:', data);
        res.json('Update Successfull');
      }
    });
    
    // Add your code here
  } catch (error) {
    res.json( error)  
  }
});

/****************************
* End (Blogs) *
****************************/



/****************************
* Delete (Edit Blogs) *
****************************/
app.delete('/api/blog/:id', async function(req, res) {

  try {
    const id = req.params.id
      const params = {
      TableName : 'blogs',
      Key : {
        id: id,
      }              
    }

    dynamoDb.delete(params, (err, data) => {
      if (err) {
        console.error('Error updating item:', err);
        res.status(500).send('Error Delete item');
      } else {
        console.log('Item updated successfully:', data);
        res.json('Deleted Successfull');
      }
    });
    
    // Add your code here
  } catch (error) {
    res.json( error)  
  }
});




// products


/****************************
* GET (Get Products) *
****************************/
app.get('/api/products', async function(req, res) {

  try {
    
    const params = {
      TableName : 'products',                      
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
     dynamoDb.scan(params , function(err , data){
      if(err) {
        res.json({message : err.message});
      }else{ 
        res.json(data)}
    })
    
    // Add your code here
  } catch (error) {
    res.json({message : 'Yahn Error Hai'})  
  }
});



/****************************
* Post (Create Products) *
****************************/
app.post('/api/products', async function(req, res) {

  try {
    
    const params = {
      TableName : 'products', 
      Item : {
        id: req.body.id,
        productImg : req.body.productImg ,
        searchProduct : req.body.searchProduct,
        productTotalCost : req.body.productTotalCost,
        productTitle : req.body.productTitle,
        productSubTitle : req.body.productSubTitle,
        productSold : req.body.productSold,
        productShippingTime : req.body.productShippingTime,
        productShippingCost : req.body.productShippingCost,
        productReview : req.body.productReview,
        productRating : req.body.productRating,
        productPrice : req.body.productPrice,
        productOffer : req.body.productOffer,
        productDiscount : req.body.productDiscount,
      }                     
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
     dynamoDb.put(params , function(err , data){
      if(err) {
        res.json({message : err.message});
      }else{ 
        res.json(data)}
    })
    
    // Add your code here
  } catch (error) {
    res.json({message : 'Yahn Error Hai'})  
  }
});


/****************************
* Delete (Edit Products) *
****************************/
app.delete('/api/products/:id', async function(req, res) {

  try {
    const id = req.params.id
      const params = {
      TableName : 'products',
      Key : {
        id: id,
      }              
    }

    dynamoDb.delete(params, (err, data) => {
      if (err) {
        console.error('Error updating item:', err);
        res.status(500).send('Error Delete item');
      } else {
        console.log('Item updated successfully:', data);
        res.json('Deleted Successfull');
      }
    });
    
    // Add your code here
  } catch (error) {
    res.json( error)  
  }
});


/****************************
* Post (Send Offer) *
****************************/

app.post('/api/sendOffer', async (req, res) => {
  const { to, subject, text } = req.body;

      const mailOptions = {
        from: 'helpermall245@gmail.com',
        to: to,
        subject: subject ,
        text: text,
      };
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).send(error);
        } else {
          console.log('Email sent:', info.response);
          res.send('Email sent successfully');
        }
      });

  

});




app.post('/api/sendMessage', async (req, res) => {
  const { to, subject, text } = req.body;

      const mailOptions = {
        from: 'helpermall245@gmail.com',
        to: to,
        subject: subject ,
        text: text,
      };
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).send(error);
        } else {
          console.log('Email sent:', info.response);
          res.send('Email sent successfully');
        }
      });

  

});







app.listen(3000, function() {
    console.log("App started")
});


module.exports = app
