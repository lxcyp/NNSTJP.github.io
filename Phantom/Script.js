jQuery(document).ready(function()
	{
		jQuery("#MainTextHere").load("Introduction.html");
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
		document.getElementById("MainMenuIntroduction").style.boxShadow = "";
		document.getElementById("MainMenuSkill").style.boxShadow = "";
		document.getElementById("MainMenuPA").style.boxShadow = "";
		document.getElementById("MainMenuEquipment").style.boxShadow = "";
		document.getElementById("MainMenuVideo").style.boxShadow = "";
		document.getElementById("MainMenuFrame").style.boxShadow = "";
		document.getElementById("MainMenuCredits").style.boxShadow = "";
		document.getElementById(Element).style.boxShadow = "inset -2px 0px 0px 0px #8080E0";
	}