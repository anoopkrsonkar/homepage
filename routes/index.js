var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('jsearch', { title: 'Welcome to AreaHop' });
  
  res.sendFile('jsearch.html', { root: path.join(__dirname, '../public') });
});
/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
<<<<<<< HEAD
    res.render('helloworld', { title: 'Welocme to AreaHop' });
});

router.get('/search', function(req, res) {
    res.render('search', { title: 'Welocme to AreaHop' });
    //res.sendFile('search.html', { root: path.join(__dirname, '../public') });
=======
    res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/jsearch', function(req, res) {
    res.render('jsearch', { title: 'Hello, World!' });
>>>>>>> 749953af7accb90c1e8f4faaf97508ae6afbe244
});
router.get('/search', function(req, res) {
    console.log(req.body.tipue_search_content);
    var search = req.body.tipue_search_content;
    res.render('search', { "searchlist": search });
});

router.get('/search-box', function(req, res) {
    var db = req.db;
    var collection = db.get('businesscollection');
    collection.find({},{},function(e,docs){
        res.render('search-box', {
            "businesslist" : docs
        });
        //console.log(docs);
    });
});

/* GET New Business page. */
router.get('/newbusiness', function(req, res) {
    res.render('newbusiness', { title: 'Add New Business' });
});
/* POST to Add User Service */
router.post('/addbusiness', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var businessName = req.body.businessname;
    var businessEmail = req.body.businessemail;
    var city_id = req.body.city_id;
     var pincode = req.body.pincode;
    var latitude = req.body.latitude;
    var longitude= req.body.longitude;
     var phone_no = req.body.phone_no;
    var status = req.body.status;
    var user_id = req.body.user_id;
     var address = req.body.address;
    var areahop_id= req.body.areahop_id;
    var neighborhood= req.body.neighborhood;
     var state= req.body.state;
    var website = req.body.website;
    

    // Set our collection
    var collection = db.get('businesscollection');

    // Submit to the DB
    collection.insert({
        
    businessName :businessName,
    businessEmail :businessEmail,
    city_id :city_id,
    pincode:pincode,
    latitude:latitude,
    longitude:longitude,
    phone_no:phone_no,
    status :status,
    user_id :user_id,
    address:address,
    areahop_id:areahop_id,
    neighborhood:neighborhood,
    state:state,
    website:website
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("businesslist");
        }
    });
});
/* GET Businesslist page. */
router.get('/businesslist', function(req, res) {
    var db = req.db;
    var collection = db.get('businesscollection');
    collection.find({},{},function(e,docs){
        res.render('businesslist', {
            "businesslist" : docs
        });
        //console.log(docs);
    });
});
router.post('/searchBusiness', function(req, res) {
    var db = req.db;
    var collection = db.get('businesscollection');
        var name = req.body.search;
        console.log(name);
        collection.find(
   { $text: { $search: name } },
function(e,docs){
    console.log(docs);
        res.render('searchBusiness', {
<<<<<<< HEAD
            "businesslist" : docs,
=======
            "searchBusiness" : docs,
>>>>>>> 749953af7accb90c1e8f4faaf97508ae6afbe244
            });
 });
        /*
    collection.find({},{},function(e,docs){
        console.log(docs);

        res.render('searchBusiness', {
            "searchBusiness" : docs,
            "search":name
            
        });
        //console.log(docs);
    });*/
}); 
/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs)
    {
            res.render('userlist',
        {
            "userlist" : docs
        });
    });
});
/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});
/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    var tagName = req.body.tagname;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            //res.redirect("userlist");
        var db = req.db;
            var collection1 = db.get('tagcollection');
        
        
    collection1.find({},{},function(e,docs){
        res.render('taguser', {
            "searchtag" : docs,
            "search":tagName
            
        });
    });
        }
    });
    });
/* GET New Tag page. */
router.get('/newtag', function(req, res)
 {
    res.render('newtag', { title: 'Add New Tag' });
    /* POST to Add User Service */
});
router.post('/addtag', function(req, res)
 {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var tagName = req.body.tagname;
    
    

    // Set our collection
    var collection = db.get('tagcollection');

    // Submit to the DB
    collection.insert(
    {
        
        "tagname": tagName
    }, function (err, doc)
     {
        if (err) 
        {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else 
        {
            // And forward to success page
            res.redirect("taglist");
        }
    });
});
/* GET Taglist page. */
router.get('/taglist', function(req, res) {
    var db = req.db;
    //var tagName ="anoop";
    var collection = db.get('tagcollection');
    collection.find({},{},function(e,tagName){
        res.render('taglist', {
            "taglist" : tagName
        });
    });
});
router.post('/addreview', function(req, res)
 {
    
    // Set our internal DB variable
    var db = req.db;


    // Get our form values. These rely on the "name" attributes
    var review = req.body.review;
    var bname = req.body.pd;
    console.log(req.body);
    

    // Set our collection
    var collection = db.get('reviewcollection');

    // Submit to the DB
    collection.insert(
    {
        "Bname": bname,//taking id in db
        "Review": review
    }, function (err, doc)
     {
        if (err) 
        {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else 
        {
            // And forward to success page
            res.send("Thank you for sharing your experience");
        }
    });
});

router.post('/addtagbusiness', function(req, res)
 {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var tagName = req.body.tagname;
    
    

    // Set our collection
    var collection = db.get('business_tagcollection');

    // Submit to the DB
    collection.insert(
    {
        
        "tagname": tagName
    }, function (err, doc)
     {
        if (err) 
        {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else 
        {
            // And forward to success page
            res.redirect("taglist");
        }
    });
});

module.exports = router;
