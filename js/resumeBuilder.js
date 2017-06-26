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

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedBiopic, formattedWelcome, HTMLskillsStart);

    for(var skill = 0; skill < bio.skills.length; skill++){
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};


var education = {
  "schools": [
    {
      "name":"Columbus State University",
      "location":"Columbus, GA",
      "degree":"B.S.",
      "majors":["Special Education General Curriculum"],
      "dates":"2008-2011",
      "url":"https://www.columbusstate.edu/"
    },
    {
      "name":"Georgia Southern University",
      "location":"Statesboro, GA",
      "degree":"M.Ed.",
      "majors":["Special Education Adaptive Curriculum"],
      "dates":"2013-2014",
      "url":"http://www.georgiasouthern.edu/"
    },
    {
      "name":"Oregon State University",
      "location":"Corvallis, OR",
      "degree":"B.S.",
      "majors":["Computer Science"],
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
    for(var school = 0; school < education.schools.length; school++){
      $("#education").append(HTMLschoolStart);

      var formattedSchoolname = HTMLschoolName.replace("%data%",education.schools[school].name);
      var formattedSchoolnamelink = formattedSchoolname.replace("#",education.schools[school].url);
      var formattedSchooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchooltitle = formattedSchoolnamelink + formattedSchooldegree;
      var formattedSchoollocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
      var formattedSchooldates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
      $(".education-entry:last").append(formattedSchooltitle, formattedSchoollocation, formattedSchooldates);

      for(var major = 0; major < education.schools[school].majors.length; major++){
        var formattedSchoolmajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedSchoolmajor);
      }
    }

    for(var course = 0; course < education.onlineCourses.length; course++){
      $("#education").append(HTMLonlineClasses, HTMLschoolStart);

      var formattedOnlinetitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
      var formattedOnlineschool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
      var formattedOnlinename = formattedOnlinetitle + formattedOnlineschool;
      var formattedOnlinedates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
      var formattedOnlineurl = HTMLonlineURL.replace("#", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedOnlinename, formattedOnlinedates, formattedOnlineurl);
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
    for(var job = 0; job < work.jobs.length; job++){
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
      var formattedWork = formattedEmployer + formattedTitle;
      var formattedWorklocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
      var formattedWorkdates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
      var formattedWorkdescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedWork, formattedWorklocation, formattedWorkdates, formattedWorkdescription);
    }
  }
};

var projects = {
  "projects":[
    {
      "title":"sample project",
      "dates":"2017",
      "description": "Using imagination can be fun and rewarding",
      "images":[
        "images/brain1.jpg",
        "images/brain123.jpg"
      ]
    }
  ],
  "display":function projectsSection(){

    for(var project = 0; project < projects.projects.length; project++){
      $("#projects").append(HTMLprojectStart);

      var formattedProjecttitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      var formattedProjectdates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
      var formattedProjectdescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
      $(".project-entry:last").append(formattedProjecttitle, formattedProjectdates, formattedProjectdescription);

      for(var image = 0; image < projects.projects[project].images.length; image++){
        var formattedProjectimages = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectimages);
      }
    }
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
}
