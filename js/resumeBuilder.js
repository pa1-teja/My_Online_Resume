/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var bio = {
    "name": "Kona Venkata Sai Pavan Teja",
    "role": "Professional Android & Frontend Web Developer",
    "contacts": {
        "mobile": "+91-7799495240",
        "email": "pavanteja.93@gmail.com",
        "github": "pa1-teja",
        "twitter": "@pavan_teja",
        "location": "Hyderabad, TS"
    },
    "welcomeMessage": "A Software development professional with more than an year of experience in developing web and Android mobile applications looking for a challenging opportunity to thrive in software development industry.",
    "skills": ["JAVA", "ANDROID", "HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT", "JQUERY", "GIT", "SEO"],
    "biopic": "images/Passport-size_photograph.jpg",
    "display": function() {

        var name = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        var biopic = HTMLbioPic.replace("%data%", bio.biopic);
        var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var contact, skill;


        var contacts = [];
        contacts.push(mobile, email, github, twitter, location);
       
        if (contacts.length > 0) {

            contacts.forEach(function(contact){
                $('#topContacts, #footerContacts').append(contact);
            });
        }

        $('#header').prepend(role);
        $('#header').prepend(name);
        $('#header').append(biopic);
        $('#header').append(welcomeMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(skill){
                $("#skills").append(HTMLskills.replace("%data%", skill));
            });
        }
    }
};

var work = {
    "jobs": [{
            "employer": "Udacity Inc.",
            "title": "Forum Mentor",
            "location": "Work from Home",
            "dates": "October 2016 - Present",
            "description": "Helping all the Udacity students of Android Developer Nanodegree, Android Basics Nanodegree better understand the course material, Walk them out of the coding problems they face while learning and navigate them through the challenges of being an Android Developer. And help them build apps with professional software engineering practices."
        },

        {
            "employer": "Wave9 IT Solutions",
            "title": "Associate Software Engineer",
            "location": "Hyderabad, TS",
            "dates": "August 2015 - October 2016",
            "description": "Handled various technical aspects for General Electronics’ Trip Optimizer web app such as coding the modules using Servlets, JSP which is based on Hibernate for the given design specifications. Ensured that all the required specifications of the modules are properly coded and tested prior to the submission of the code and communicated with other teams to maintain consistency in the project."
        }

    ],

    "display": function() {

        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            var employer, title, location, dates, description, job;

            work.jobs.forEach(function(job){
             
                employer = HTMLworkEmployer.replace("%data%", job.employer);
                title = HTMLworkTitle.replace("%data%", job.title);
                location = HTMLworkLocation.replace("%data%", job.location);
                dates = HTMLworkDates.replace("%data%", job.dates);
                description = HTMLworkDescription.replace("%data%", job.description);


                $(".work-entry:last").append(employer + title, location, dates, description);
              
            });
        }
    }
};

var education = {
    "schools": [{
        "name": "ICFAI University",
        "dates": "2011 - 2015",
        "location": "Hyderabad, TS, India",
        "degree": "B.Tech.(CSE)",
        "majors": ["Computer Science Engineering"],
        "url": "www.ifheindia.org"
    }],

    "onlineCourses": [{
            "school": "Udacity",
            "title": "Frontend Web Developer Nanodegree",
            "dates": "Present",
            "url": "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
        },
        {
            "school": "Udacity",
            "title": "Android Developer Nanodegree",
            "dates": "January 2017",
            "url": "https://in.udacity.com/course/android-developer-nanodegree-by-google--nd801/"
        }
    ],

    "display": function() {

        if (education.schools.length > 0 || education.onlineCourses.length > 0) {

            var schoolName, dates, location, degree, major, url, i;


            education.schools.forEach(function(school){

                $('#education').append(HTMLschoolStart);

                 schoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
                 degree = HTMLschoolDegree.replace("%data%", school.degree);
                 dates = HTMLschoolDates.replace("%data%", school.dates);
                 location = HTMLschoolLocation.replace("%data%", school.location);

                 $(".education-entry:last").append(schoolName + degree, dates, location);

                 school.majors.forEach(function(major){
                    major = HTMLschoolMajor.replace("%data%", major);
                    $(".education-entry:last").append(major);
                 });
              

                if (education.onlineCourses.length > 0) {

                    $("#education").append(HTMLonlineClasses);

                    var onlineTitle, onlineSchool, onlineDates, onlineURL;

                    education.onlineCourses.forEach(function(onlineCourse){
                         $("#education").append(HTMLschoolStart);

                        onlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);
                        onlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
                        onlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
                        onlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url);

                        $(".education-entry:last").append(onlineTitle + onlineSchool, onlineDates, onlineURL);
                    });
                }
            });
        }
    }
};


var projects = {
    "projects": [

        {
            "title": "Phone Cop",
            "dates": "December 2016 - Present",
            "description": "Developing an Android crime recorder app called Phone Cop which records audio and captures images in stealth for a specified time and automatically alerts all the emergency contacts. Implemented the code to get the location using the location API and store data in Internal Storage space, SQLite Database using Content Providers, Loaders, Shared Preferences, and Authenticates user using Google Sign-In API before providing access to sensitive information.",
            "images": ["images/Phone_Cop_Logo_222x120.jpg"],
            "url": "https://github.com/pa1-teja/PhoneCop"
        },

        {
            "title": "Sunshine",
            "dates": " March 2016 - December 2016",
            "description": "Developed an Android weather forecast app called Sunshine as part of the Nanodegree course, which displays 14 days of weather forecast information. Implemented code to get the location of the device using location API and accordingly fetch the weather forecast for the location from a weather API. Implemented UI with various transition mechanisms for phones, tablets and wearable devices of various screen dimensions. Implemented code to store data in SQLite Database using Content Providers and also dynamically switch the home screen wallpaper depending upon the weather using a third party API.",
            "images": ["images/Sunshine_Android_app_Logo_222x120.jpg"],
            "url": "https://github.com/pa1-teja/SunShine"
        },

        {
            "title": "Popular Movies",
            "dates": "August 2016 - November 2016",
            "description": "A responsive movie mobile app which displays a grid of movie posters. Developed as part of the Nanodegree course. Implemented a movie poster grid and a ViewPager with more information about the movie, which is fetched from Movie DB API in JSON format using Retrofit API and trailer images using YouTube API. Implemented an Instrumentation Test Case which uses Android Framework APIs to run all the tests.",
            "images": ["images/Popular_Movies_Android_App_Logo_222x120.jpg"],
            "url": "https://github.com/pa1-teja/MoviesApp"
        },

        {
            "title": "Stock Hawk",
            "dates": "June 2016 - July 2016",
            "description": "An android app called StockHawk which displays stocks information of the companies and also shows a graphical representation of a company’s stocks over time. Diagnosed an existing app and handled the error cases as part of the Nanodegree course. Implemented code to make the app accessible to sight-impaired users. Localized the app for distribution in various countries. Implemented an android widget to make data accessible on the device’s home screen. Used a third party library to draw a graph of a company’s stocks over time on the screen.",
            "images": ["images/stock_hawk_222x120.jpg"],
            "url": "https://github.com/pa1-teja/StockHawk"
        },

        {
            "title": "SCM FPS Status",
            "dates": "January 2015 - July 2015",
            "description": "Developed the app UI in Android Studio IDE, using XML, and implemented code using Android Intents, AsyncTask, Loaders, Alert Dialogs, Toast messages etc. from Android SDK. Wrote code to consume SOAP response from a JBOSS web server using KSOAP2-Android API. Documented the requirement specifications, tools and implementation, architecture and design specifications.",
            "images": ["images/SCM_FPS_Status_logo_222x120.jpg"],
            "url": "https://github.com/pa1-teja/SCM-FPS-STATUS"
        }
    ],

    "display": function() {
        if (projects.projects.length > 0) {

            var projectTitle, projectDates, description, projectImage, i, image;

            projects.projects.forEach(function(project){
                $("#projects").append(HTMLprojectStart);
                
                projectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.url);
                projectDates = HTMLprojectDates.replace("%data%", project.dates);
                description = HTMLprojectDescription.replace("%data%", project.description);


                $(".project-entry:last").append(projectTitle, projectDates, description);
      
                    project.images.forEach(function(image){
                    projectImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(projectImage);  
                });
            });
        }
    }
};


bio.display();
work.display();
education.display();
projects.display();
$('#mapDiv').append(googleMap);