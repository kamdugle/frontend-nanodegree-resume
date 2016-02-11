function firstLetterUpper(str) {
	var fixedStr = str.slice(0, 1).toUpperCase() + str.slice(1);
	return fixedStr;
}

var bio = {
	"bio": {
		"name": "Kam Bowman",
		"role": "Web Developer",
		"contacts": {
			"email": "Kamry.Bowman@gmail.com",
			"mobile": "303-974-8974",
			"github": "https://github.com/kamdugle/",
			"location": "Denver, CO"
			},
		"bioPic": "images/omnis vanitas.svg",
		"welcomeMsg": "Welcome!",
		"skills": ["HTML, CSS, Javascript"]
	},
	"display": function() {
			var formattedProps = [];
			formattedProps.push(HTMLheaderName.replace('%data%', bio.bio.name));
			formattedProps.push(HTMLheaderRole.replace('%data%', bio.bio.role));
			formattedProps.push(HTMLbioPic.replace('%data%', bio.bio.bioPic));
			formattedProps.push(HTMLwelcomeMsg.replace('%data%', bio.bio.welcomeMsg));

			$('#header').prepend(formattedProps);

			var formattedContacts = [];
			var contactTypes = ["email", "mobile", "twitter", "github", "blog", "location"]
			for (var i = 0; i < contactTypes.length; i++) {
				var contact = bio.bio.contacts[contactTypes[i]];
				if (contact) {
					var formatting = window['HTML' + contactTypes[i]];
					formattedContacts.push(formatting.replace('%data%', contact));
			}
			}
			for (i = 0; i < formattedContacts.length; i++) {
				$('#topContacts').prepend(formattedContacts[i]);
			}

			if (bio.bio.skills.length > 0) {
				$('#header').append(HTMLskillsStart);
				console.log(HTMLskillsStart);
				for (var i = 0; i < bio.bio.skills.length; i++) {
					$('#skills').append(HTMLskills.replace('%data%', bio.bio.skills[i]));
				}
			}


		}
	};
bio.display();


var work = {
	"jobs": [
	{
		"employer": "Colorado Lending Source",
		"title": "Loan Officer",
		"years": "2013-2016",
		"location": "Denver, Colorado",
		"description": "Underwrote SBA 504 loan packages and managed SBA approval process"	
	},
	{
		"employer": "Clear Creek Consulting",
		"title": "Junior Associate",
		"years": "2012-2013",
		"location": "Denver, Colorado",
		"description": "Worked on portfolio of 40 clients, resolving tax lien and collection issues on their behalf with IRS and state governments"		
	},
	{
		"employer": "Ministry of Education, Spain",
		"title": "Language Assistant",
		"years": "2010-2012",
		"location": "Madrid, Spain",
		"description": "Participated in language immersion programs in elementary and high schools in Spain"		
	}
	],
	"display": function() {
		for (i in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			console.log(HTMLworkDates.replace("%data%", work["jobs"][i]["years"]));
			var jobEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][i]["employer"]);
			var jobTitle = HTMLworkTitle.replace("%data%", work["jobs"][i]["title"]);
			var formattedTitle = jobEmployer + jobTitle;
			$(".work-entry:last").append(formattedTitle);

			var jobYears = HTMLworkDates.replace("%data%", work.jobs[i].years);
			$(".work-entry:last").append(jobYears);

			var jobLocation = HTMLworkLocation.replace("%data%", work.jobs[i]["location"]);
			$(".work-entry:last").append(jobLocation);

			var jobDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(jobDescription);
		}
	}
};

work.display();

var education = {
	"schools": [
		{"name": "University of Michigan",
		"location": "Ann Arbor, Michigan",
		"degree": "Bachelors of the Arts",
		"major": "Philosophy, Economics",
		"dates": "2008-2010"
		},
		{"name": "Western Michigan University",
		"location": "Kalamazoo, Michigan",
		"degree": "Bachelors of the Arts, transfer",
		"major": "Philosophy, Economics",
		"dates": "2006-2008"
		}],

		"display": function() {
			for (school in education.schools) {
				$('#education').append(HTMLschoolStart);
				formattedStrings = [];
				schoolProperties = ["name", "location", "degree", "major", "dates", "url"];

				for (var i = 0; i < schoolProperties.length; i++) {
					var currentProp = education.schools[school][schoolProperties[i]]
					if (currentProp) {
						var formatting = window['HTMLschool' + firstLetterUpper(schoolProperties[i])];
						console.log('HTMLschool' + firstLetterUpper(schoolProperties[i]));
						var formattedString = formatting.replace('%data%', currentProp)
						$('.education-entry').append(formattedString);
					}
				}	
			}
		}
	};

education.display();

var projects = {
	"projects":
	[
	{
		"title": "Mock website",
		"dates": "2016",
		"description": "Made various websites on Udacity website.",
		"images": ["images/cornice.jpg"]
	},
	{
		"title": "Wock Mebsite",
		"dates": "2013",
		"description": "Switched the first letters around on the words in seven sentences.",
		"images": ["images/fountain.jpg", "images/fountain 2.jpg"]
	}],
	"display": function() {;
		for (proj in projects.projects) {
			var currentProj = projects.projects[proj];
			formattedStrings = [];
			formattedStrings.push(HTMLprojectTitle.replace("%data%", currentProj.title));
			formattedStrings.push(HTMLprojectDates.replace("%data%", currentProj.dates));
			formattedStrings.push(HTMLprojectDescription.replace("%data%", currentProj.description))
			
			if (currentProj.images.length > 0) {
				for (var i = 0; i < currentProj.images.length; i++) {
					formattedStrings.push(HTMLprojectImage.replace("%data%", currentProj.images[i]))
				}
			}
			
			$('#projects').append(HTMLprojectStart);

			for (var i = 0; i < formattedStrings.length; i++) {
				console.log($('.project-entry').last().html());
				$('.project-entry').last().append(formattedStrings[i]);
			}
		}
	}
	};

projects.display();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

$('#mapDiv').append(googleMap);



/* function inName(name) {
	var names = name.split(" ");
	var newName = names[0] + " " + names[1].toUpperCase();
	return newName;
}

$('#main').append(internationalizeButton); */