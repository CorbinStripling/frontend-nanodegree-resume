var bio = {
  "name":"Corbin Stripling",
  "role":"Jack of All Trades",
  "contacts": {
    "mobile": "229-322-3847",
    "email": "striplingdesignco@gmail.com",
    "github": "CorbinStripling",
    "twitter":"@coachstrip",
    "location":"Bluffton, SC"
  	},
  "welcomeMessage":"Welcome to my resume page!",
  "skills":[
    "Creative",
    "Effective communicator",
    "Variety of skill sets",
    "Takes sweet photos"
  ],
  "biopic":"images/Snapshot_2015828.jpg",
  "display": function bioSection(){
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedHeader = formattedName + formattedRole;
    $("#header").prepend(formattedHeader);

    var formattedContact = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);

    var formattedContact = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);

    var formattedContact = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);

    var formattedContact = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);

    var formattedContact = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#footerContacts").append(formattedContact);

    var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").append(formattedBiopic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);

    if (bio.skills.length > 0){
    	for (var e in bio.skills){
      	var formattedSkill = HTMLskills.replace("%data%",bio.skills[e]);
      	$("#skills").append(formattedSkill);
      }
    }
  }
};


var education = {
  "schools": [
    {
      "name":"Columbus State University",
      "location":"Columbus, GA",
      "degree":"B.S.",
      "majors":"Special Education General Curriculum",
      "dates":"2008-2011",
      "url":"https://www.columbusstate.edu/"
    },
    {
      "name":"Georgia Southern University",
      "location":"Statesboro, GA",
      "degree":"M.Ed.",
      "majors":"Special Education Adaptive Curriculum",
      "dates":"2013-2014",
      "url":"http://www.georgiasouthern.edu/"
    },
    {
      "name":"Oregon State University",
      "location":"Corvallis, OR",
      "degree":"B.S.",
      "majors":"Computer Science",
      "dates":"2017",
      "url":"http://eecs.oregonstate.edu/online-cs-students"
    }
   ],
  "onlineCourses":[
    {
      "title":"Intro to Programming Nanodegree",
      "school":"Udacity",
      "dates":"2017",
      "url":"https://classroom.udacity.com/me"
    }
  ],
  "display": function educationSection(){
    for (var school in education.schools){
      $("#education").append(HTMLschoolStart);

      var formattedSchoolname = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedSchoolname = formattedSchoolname.replace("#",education.schools[school].url);
      var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchooltitle = formattedSchoolname + formattedSchooldegree;
      $(".education-entry:last").append(formattedSchooltitle);

      var formattedSchoollocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      $(".education-entry:last").append(formattedSchoollocation);

      var formattedSchooldates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      $(".education-entry:last").append(formattedSchooldates);

      var formattedSchoolmajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
      $(".education-entry:last").append(formattedSchoolmajor);
    }

    for (var course in education.onlineCourses){
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);

      var formattedOnlinetitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
      var formattedOnlineschool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
      var formattedOnlinename = formattedOnlinetitle + formattedOnlineschool;
      $(".education-entry:last").append(formattedOnlinename);

      var formattedOnlinedates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
      $(".education-entry:last").append(formattedOnlinedates);

      var formattedOnlineurl = HTMLonlineURL.replace("#", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedOnlineurl);
    }
  }
};

var work = {
  "jobs":[
    {
      "employer":"Liberty County High School",
      "title":"Severe/Profound Disabilities Teacher",
      "location":"Hinesville, GA",
      "dates":"2012 - 2015",
      "description":"Teacher of students with severe disabilities"
    },
    {
      "employer":"Hilton Head Island High School",
      "title":"Severe/Profound Disabilities Teacher",
      "location":"Hilton Head, SC",
      "dates":"2015 - 2017",
      "description":"Teacher of students with severe disabilities"
    }
  ],
  "display": function workSection(){
    for (job in work.jobs){
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedWork = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedWork);

      var formattedWorklocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      $(".work-entry:last").append(formattedWorklocation);

      var formattedWorkdates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      $(".work-entry:last").append(formattedWorkdates);

      var formattedWorkdescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedWorkdescription);
    }
  }
};

var projects = {
  "projects":[
    {
      "title":"sample project",
      "dates":2017,
      "description": "Using imagination can be fun and rewarding",
      "images":[
        "images/brain1.jpg",
        "images/brain123.jpg"
      ]
    }
  ],
  "display":function projectsSection(){
    for(project in projects.projects){
      $("#projects").append(HTMLprojectStart);

      var formattedProjecttitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      $(".project-entry:last").append(formattedProjecttitle);

      var formattedProjectdates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
      $(".project-entry:last").append(formattedProjectdates);

      var formattedProjectdescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
      $(".project-entry:last").append(formattedProjectdescription);

      for(image in projects.projects[project].images){
        var formattedProjectimages = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectimages);
      }
    };
  }
};


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

var map;
/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
    };


  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  var map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  $("#map").append(map);
};
