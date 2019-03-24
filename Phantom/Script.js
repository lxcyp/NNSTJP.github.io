$(document).ready(function()
	{
		document.getElementById("MainMenuAbout").style.boxShadow = "inset -2px 0px 0px 0px #8080E0";
		$("#MainTextHere").load("About.html");
	});
function MainMenuOver(Element)
	{
		document.getElementById(Element).style.background = "#8080E0";
	}
function MainMenuOut(Element)
	{
		document.getElementById(Element).style.background = "";
	}
function MainMenuClick(Element)
	{
		document.getElementById("MainMenuAbout").style.boxShadow = "";
		document.getElementById("MainMenuIntro").style.boxShadow = "";
		document.getElementById("MainMenuSkill").style.boxShadow = "";
		document.getElementById("MainMenuATK").style.boxShadow = "";
		document.getElementById("MainMenuEquip").style.boxShadow = "";
		document.getElementById("MainMenuVideo").style.boxShadow = "";
		document.getElementById("MainMenuExtra").style.boxShadow = "";
		document.getElementById("MainMenuCredit").style.boxShadow = "";
		document.getElementById(Element).style.boxShadow = "inset -2px 0px 0px 0px #8080E0";
		if(Element == "MainMenuAbout")
			{
				$("#MainTextHere").load("About.html");
			}
		if(Element == "MainMenuIntro")
			{
				$("#MainTextHere").load("Intro.html");
			}
		if(Element == "MainMenuSkill")
			{
				$("#MainTextHere").load("Skill.html");
			}
		if(Element == "MainMenuATK")
			{
				$("#MainTextHere").load("ATK.html");
			}
		if(Element == "MainMenuEquip")
			{
				$("#MainTextHere").load("Equip.html");
			}
		if(Element == "MainMenuVideo")
			{
				$("#MainTextHere").load("Video.html");
			}
		if(Element == "MainMenuExtra")
			{
				$("#MainTextHere").load("Extra.html");
			}
		if(Element == "MainMenuCredit")
			{
				$("#MainTextHere").load("Credit.html");
			}
	}