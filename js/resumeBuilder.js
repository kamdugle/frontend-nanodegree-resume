var skills = ["HTML, CSS, Javascript"]

var bio = {
	name: "Kam Bowman",
	role: "Web Developer",
	contacts: {
		email: "Kamry.Bowman@gmail.com"
	},
	bioPic: "images/My picture.jpg",
	welcomeMsg: "Welcome!",
	skills: skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#main").prepend(formattedBioPic, formattedWelcomeMsg, formattedSkills, formattedEmail);