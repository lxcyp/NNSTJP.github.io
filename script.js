var TabLeftMargin;
var TabRightBool = false;
var TabRightMargin;
function ResizeUpdate()
	{
		if(TabRightBool)
			{
				document.getElementById("TabAbout").style.transition = "0s";
				TabRightMargin = window.innerWidth - parseInt(window.getComputedStyle(document.getElementById("TabAbout")).getPropertyValue("width"));
				document.getElementById("TabAbout").style.marginLeft = TabRightMargin;
			}
	}
function TabLeft()
	{
		document.getElementById("TabClass").style.marginLeft = "0px";
		TabRightBool = false;
		document.getElementById("TabAbout").style.transition = "0.5s";
		document.getElementById("TabAbout").style.marginLeft = "100%";
	}
function TabMiddle()
	{
		TabLeftMargin = 0 - parseInt(window.getComputedStyle(document.getElementById("TabAbout")).getPropertyValue("width"));
		document.getElementById("TabClass").style.marginLeft = TabLeftMargin;
		TabRightBool = false;
		document.getElementById("TabAbout").style.transition = "0.5s";
		document.getElementById("TabAbout").style.marginLeft = "100%";
	}
function TabRight()
	{
		TabLeftMargin = 0 - parseInt(window.getComputedStyle(document.getElementById("TabAbout")).getPropertyValue("width"));
		document.getElementById("TabClass").style.marginLeft = TabLeftMargin;
		TabRightBool = true;
		document.getElementById("TabAbout").style.transition = "0.5s";
		TabRightMargin = window.innerWidth - parseInt(window.getComputedStyle(document.getElementById("TabAbout")).getPropertyValue("width"));
		document.getElementById("TabAbout").style.marginLeft = TabRightMargin;
	}
var ActiveClassM;
var ActiveClassT;
var ActiveClassS;
var CritRate;
var CritDamage;
var CritMath;
function SetClassM(ClassM)
	{
		ActiveClassT = ClassM;
		if(ActiveClassT == ActiveClassS && ActiveClassT != "Ph")
			{
				SetClassS(ActiveClassM);
			}
		ActiveClassM = ClassM;
		document.getElementById("CMHu").checked = false;
		document.getElementById("CMFi").checked = false;
		document.getElementById("CMRa").checked = false;
		document.getElementById("CMGu").checked = false;
		document.getElementById("CMFo").checked = false;
		document.getElementById("CMTe").checked = false;
		document.getElementById("CMBr").checked = false;
		document.getElementById("CMBo").checked = false;
		document.getElementById("CMSu").checked = false;
		document.getElementById("CMHr").checked = false;
		document.getElementById("CMPh").checked = false;
		document.getElementById("CSHu").disabled = false;
		document.getElementById("CSFi").disabled = false;
		document.getElementById("CSRa").disabled = false;
		document.getElementById("CSGu").disabled = false;
		document.getElementById("CSFo").disabled = false;
		document.getElementById("CSTe").disabled = false;
		document.getElementById("CSBr").disabled = false;
		document.getElementById("CSBo").disabled = false;
		document.getElementById("CSSu").disabled = false;
		document.getElementById("CSPh").disabled = false;
		if(ActiveClassM == "Hu")
			{
				document.getElementById("CMHu").checked = true;
				document.getElementById("CSHu").checked = false;
				document.getElementById("CSHu").disabled = true;
			}
		if(ActiveClassM == "Fi")
			{
				document.getElementById("CMFi").checked = true;
				document.getElementById("CSFi").checked = false;
				document.getElementById("CSFi").disabled = true;
			}
		if(ActiveClassM == "Ra")
			{
				document.getElementById("CMRa").checked = true;
				document.getElementById("CSRa").checked = false;
				document.getElementById("CSRa").disabled = true;
			}
		if(ActiveClassM == "Gu")
			{
				document.getElementById("CMGu").checked = true;
				document.getElementById("CSGu").checked = false;
				document.getElementById("CSGu").disabled = true;
			}
		if(ActiveClassM == "Fo")
			{
				document.getElementById("CMFo").checked = true;
				document.getElementById("CSFo").checked = false;
				document.getElementById("CSFo").disabled = true;
			}
		if(ActiveClassM == "Te")
			{
				document.getElementById("CMTe").checked = true;
				document.getElementById("CSTe").checked = false;
				document.getElementById("CSTe").disabled = true;
			}
		if(ActiveClassM == "Br")
			{
				document.getElementById("CMBr").checked = true;
				document.getElementById("CSBr").checked = false;
				document.getElementById("CSBr").disabled = true;
			}
		if(ActiveClassM == "Bo")
			{
				document.getElementById("CMBo").checked = true;
				document.getElementById("CSBo").checked = false;
				document.getElementById("CSBo").disabled = true;
			}
		if(ActiveClassM == "Su")
			{
				document.getElementById("CMSu").checked = true;
				document.getElementById("CSSu").checked = false;
				document.getElementById("CSSu").disabled = true;
			}
		if(ActiveClassM == "Hr")
			{
				document.getElementById("CMHr").checked = true;
				document.getElementById("CSHu").checked = false;
				document.getElementById("CSFi").checked = false;
				document.getElementById("CSRa").checked = false;
				document.getElementById("CSGu").checked = false;
				document.getElementById("CSFo").checked = false;
				document.getElementById("CSTe").checked = false;
				document.getElementById("CSBr").checked = false;
				document.getElementById("CSBo").checked = false;
				document.getElementById("CSSu").checked = false;
				document.getElementById("CSPh").checked = false;
				document.getElementById("CSHu").disabled = true;
				document.getElementById("CSFi").disabled = true;
				document.getElementById("CSRa").disabled = true;
				document.getElementById("CSGu").disabled = true;
				document.getElementById("CSFo").disabled = true;
				document.getElementById("CSTe").disabled = true;
				document.getElementById("CSBr").disabled = true;
				document.getElementById("CSBo").disabled = true;
				document.getElementById("CSSu").disabled = true;
				document.getElementById("CSPh").disabled = true;
				ActiveClassS = "";
			}
		if(ActiveClassM == "Ph")
			{
				document.getElementById("CMPh").checked = true;
				document.getElementById("CSHu").checked = false;
				document.getElementById("CSFi").checked = false;
				document.getElementById("CSRa").checked = false;
				document.getElementById("CSGu").checked = false;
				document.getElementById("CSFo").checked = false;
				document.getElementById("CSTe").checked = false;
				document.getElementById("CSBr").checked = false;
				document.getElementById("CSBo").checked = false;
				document.getElementById("CSSu").checked = false;
				document.getElementById("CSPh").checked = false;
				document.getElementById("CSHu").disabled = true;
				document.getElementById("CSFi").disabled = true;
				document.getElementById("CSRa").disabled = true;
				document.getElementById("CSGu").disabled = true;
				document.getElementById("CSFo").disabled = true;
				document.getElementById("CSTe").disabled = true;
				document.getElementById("CSBr").disabled = true;
				document.getElementById("CSBo").disabled = true;
				document.getElementById("CSSu").disabled = true;
				document.getElementById("CSPh").disabled = true;
			}
		Update();
	}
function SetClassS(ClassS)
	{
		ActiveClassM = ActiveClassT;
		ActiveClassS = ClassS;
		document.getElementById("CSHu").checked = false;
		document.getElementById("CSFi").checked = false;
		document.getElementById("CSRa").checked = false;
		document.getElementById("CSGu").checked = false;
		document.getElementById("CSFo").checked = false;
		document.getElementById("CSTe").checked = false;
		document.getElementById("CSBr").checked = false;
		document.getElementById("CSBo").checked = false;
		document.getElementById("CSSu").checked = false;
		document.getElementById("CSPh").checked = false;
		if(ActiveClassS == "Hu")
			{
				document.getElementById("CSHu").checked = true;
			}
		if(ActiveClassS == "Fi")
			{
				document.getElementById("CSFi").checked = true;
			}
		if(ActiveClassS == "Ra")
			{
				document.getElementById("CSRa").checked = true;
			}
		if(ActiveClassS == "Gu")
			{
				document.getElementById("CSGu").checked = true;
			}
		if(ActiveClassS == "Fo")
			{
				document.getElementById("CSFo").checked = true;
			}
		if(ActiveClassS == "Te")
			{
				document.getElementById("CSTe").checked = true;
			}
		if(ActiveClassS == "Br")
			{
				document.getElementById("CSBr").checked = true;
			}
		if(ActiveClassS == "Bo")
			{
				document.getElementById("CSBo").checked = true;
			}
		if(ActiveClassS == "Su")
			{
				document.getElementById("CSSu").checked = true;
			}
		if(ActiveClassS == "Ph")
			{
				document.getElementById("CSPh").checked = true;
			}
		Update();
	}
function Update()
	{
		var TabCritList;
		document.getElementById("TabCrit").style.visibility = "visible";
		if(ActiveClassM == "Hu" || ActiveClassS == "Hu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassHu");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "visible";
					}
			}
		if(ActiveClassM != "Hu" && ActiveClassS != "Hu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassHu");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "collapse";
					}
				document.getElementById("TabCritClassHuFuryStanceCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassHuFuryStanceCritical");
			}
		if(ActiveClassM == "Fi")
			{
				TabCritList = document.getElementsByClassName("TabCritClassFiMain");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "visible";
					}
			}
		if(ActiveClassM != "Fi")
			{
				TabCritList = document.getElementsByClassName("TabCritClassFiMain");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "collapse";
					}
				document.getElementById("TabCritClassFiCriticalStrike").selectedIndex = "0";
				UpdateSkill("TabCritClassFiCriticalStrike");
			}
		if(ActiveClassM == "Fi" || ActiveClassS == "Fi")
			{
				TabCritList = document.getElementsByClassName("TabCritClassFi");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "visible";
					}
			}
		if(ActiveClassM != "Fi" && ActiveClassS != "Fi")
			{
				TabCritList = document.getElementsByClassName("TabCritClassFi");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "collapse";
					}
				document.getElementById("TabCritClassFiStanceCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassFiStanceCritical");
			}
		if(ActiveClassM == "Gu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassGuMain");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "visible";
					}
			}
		if(ActiveClassM != "Gu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassGuMain");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "collapse";
					}
				document.getElementById("TabCritClassGuTwinMachineGunMastery").selectedIndex = "0";
				UpdateSkill("TabCritClassGuTwinMachineGunMastery");
			}
		if(ActiveClassM == "Gu" || ActiveClassS == "Gu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassGu");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "visible";
					}
			}
		if(ActiveClassM != "Gu" && ActiveClassS != "Gu")
			{
				TabCritList = document.getElementsByClassName("TabCritClassGu");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "collapse";
					}
				document.getElementById("TabCritClassGuZeroRangeCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassGuZeroRangeCritical");
			}
		if(ActiveClassM == "Br" || ActiveClassS == "Br")
			{
				TabCritList = document.getElementsByClassName("TabCritClassBr");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "visible";
					}
			}
		if(ActiveClassM != "Br" && ActiveClassS != "Br")
			{
				TabCritList = document.getElementsByClassName("TabCritClassBr");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "collapse";
					}
				document.getElementById("TabCritClassBrKatanaGear").checked = false;
				document.getElementById("TabCritClassBrStanceCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassBrKatanaGear");
				UpdateSkill("TabCritClassBrStanceCritical");
			}
		if(ActiveClassM == "Bo" || ActiveClassS == "Bo")
			{
				TabCritList = document.getElementsByClassName("TabCritClassBo");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "visible";
					}
			}
		if(ActiveClassM != "Bo" && ActiveClassS != "Bo")
			{
				TabCritList = document.getElementsByClassName("TabCritClassBo");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "collapse";
					}
				document.getElementById("TabCritClassBoStanceCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassBoStanceCritical");
			}
		if(ActiveClassM == "Hr" || ActiveClassS == "Hr")
			{
				TabCritList = document.getElementsByClassName("TabCritClassHr");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "visible";
					}
			}
		if(ActiveClassM != "Hr" && ActiveClassS != "Hr")
			{
				TabCritList = document.getElementsByClassName("TabCritClassHr");
				for(var Count = 0; Count < TabCritList.length; Count ++)
					{
						TabCritList[Count].style.visibility = "collapse";
					}
				document.getElementById("TabCritClassHrWeakAttackCritical").selectedIndex = "0";
				UpdateSkill("TabCritClassHrWeakAttackCritical");
			}
	}
function UpdateSkill(Skill)
	{
		if(Skill.includes("Stance"))
			{
				if(document.getElementById(Skill).value == 0)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "0%";
					}
				else if(document.getElementById(Skill).value == 1)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "10%";
					}
				else if(document.getElementById(Skill).value == 2)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "16%";
					}
				else if(document.getElementById(Skill).value == 3)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "20%";
					}
				else if(document.getElementById(Skill).value == 4)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "23%";
					}
				else if(document.getElementById(Skill).value == 5)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "25%";
					}
				document.getElementById(Skill + "ValueDamage").innerHTML = "100%";
			}
		if(Skill == "TabCritClassFiCriticalStrike")
			{
				if(document.getElementById(Skill).value == 0)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "0%";
						document.getElementById(Skill + "ValueDamage").innerHTML = "100%";
					}
				else if(document.getElementById(Skill).value == 1)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "3%";
						document.getElementById(Skill + "ValueDamage").innerHTML = "103%";
					}
				else if(document.getElementById(Skill).value == 2)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "6%";
						document.getElementById(Skill + "ValueDamage").innerHTML = "106%";
					}
				else if(document.getElementById(Skill).value == 3)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "9%";
						document.getElementById(Skill + "ValueDamage").innerHTML = "109%";
					}
				else if(document.getElementById(Skill).value == 4)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "12%";
						document.getElementById(Skill + "ValueDamage").innerHTML = "112%";
					}
				else if(document.getElementById(Skill).value == 5)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "15%";
						document.getElementById(Skill + "ValueDamage").innerHTML = "115%";
					}
			}
		if(Skill == "TabCritClassGuTwinMachineGunMastery")
			{
				document.getElementById(Skill + "ValueRate").innerHTML = "0%";
				if(document.getElementById(Skill).value == 0)
					{
						document.getElementById(Skill + "ValueDamage").innerHTML = "100%";
					}
				else if(document.getElementById(Skill).value == 1)
					{
						document.getElementById(Skill + "ValueDamage").innerHTML = "101%";
					}
				else if(document.getElementById(Skill).value == 2)
					{
						document.getElementById(Skill + "ValueDamage").innerHTML = "102%";
					}
				else if(document.getElementById(Skill).value == 3)
					{
						document.getElementById(Skill + "ValueDamage").innerHTML = "103%";
					}
				else if(document.getElementById(Skill).value == 4)
					{
						document.getElementById(Skill + "ValueDamage").innerHTML = "104%";
					}
				else if(document.getElementById(Skill).value == 5)
					{
						document.getElementById(Skill + "ValueDamage").innerHTML = "105%";
					}
			}
		if(Skill == "TabCritClassGuZeroRangeCritical")
			{
				if(document.getElementById(Skill).value == 0)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "0%";
					}
				else if(document.getElementById(Skill).value == 1)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "20%";
					}
				else if(document.getElementById(Skill).value == 2)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "25%";
					}
				else if(document.getElementById(Skill).value == 3)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "32%";
					}
				else if(document.getElementById(Skill).value == 4)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "40%";
					}
				else if(document.getElementById(Skill).value == 5)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "50%";
					}
				document.getElementById(Skill + "ValueDamage").innerHTML = "100%";
			}
		if(Skill == "TabCritClassBrKatanaGear")
			{
				if(document.getElementById("TabCritClassBrKatanaGear").checked)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "50%";
						document.getElementById(Skill + "ValueDamage").innerHTML = "100%";
					}
				else
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "0%";
						document.getElementById(Skill + "ValueDamage").innerHTML = "100%";
					}
			}
		if(Skill == "TabCritClassHrWeakAttackCritical")
			{
				if(document.getElementById(Skill).value == 0)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "0%";
					}
				else if(document.getElementById(Skill).value == 1)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "20%";
					}
				else if(document.getElementById(Skill).value == 2)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "30%";
					}
				else if(document.getElementById(Skill).value == 3)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "40%";
					}
				else if(document.getElementById(Skill).value == 4)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "50%";
					}
				else if(document.getElementById(Skill).value == 5)
					{
						document.getElementById(Skill + "ValueRate").innerHTML = "60%";
					}
				document.getElementById(Skill + "ValueDamage").innerHTML = "100%";
			}
		UpdateCrit()
	}
function UpdateCrit()
	{
		CritRate = parseInt(document.getElementById("TabCritClassNaturalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassFiStanceCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassBrKatanaGearValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassBrStanceCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassBoStanceCriticalValueRate").innerHTML);
		CritRate += parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueRate").innerHTML);
		if(CritRate > 100)
			{
				CritRate = 100;
			}
		document.getElementById("TabCritRate").innerHTML = CritRate + "%";
		CritDamage = parseInt(document.getElementById("TabCritClassNaturalValueDamage").innerHTML);
		CritDamage *= parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueDamage").innerHTML);
		CritDamage *= parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueDamage").innerHTML);
		CritDamage *= parseInt(document.getElementById("TabCritClassFiStanceCriticalValueDamage").innerHTML);
		CritDamage *= parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueDamage").innerHTML);
		CritDamage *= parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueDamage").innerHTML);
		CritDamage *= parseInt(document.getElementById("TabCritClassBrKatanaGearValueDamage").innerHTML);
		CritDamage *= parseInt(document.getElementById("TabCritClassBrStanceCriticalValueDamage").innerHTML);
		CritDamage *= parseInt(document.getElementById("TabCritClassBoStanceCriticalValueDamage").innerHTML);
		CritDamage *= parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueDamage").innerHTML);
		document.getElementById("TabCritDamage").innerHTML = (CritDamage / 1000000000000000000).toFixed(2) + "%";
		document.getElementById("TabCritClassNaturalValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassNaturalValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		document.getElementById("TabCritClassHuFuryStanceCriticalValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassHuFuryStanceCriticalValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		document.getElementById("TabCritClassFiCriticalStrikeValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassFiCriticalStrikeValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		document.getElementById("TabCritClassFiStanceCriticalValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassFiStanceCriticalValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		document.getElementById("TabCritClassGuTwinMachineGunMasteryValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		document.getElementById("TabCritClassGuZeroRangeCriticalValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassGuZeroRangeCriticalValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		document.getElementById("TabCritClassBrKatanaGearValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassBrKatanaGearValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		document.getElementById("TabCritClassBrStanceCriticalValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassBrStanceCriticalValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		document.getElementById("TabCritClassBoStanceCriticalValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassBoStanceCriticalValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		document.getElementById("TabCritClassHrWeakAttackCriticalValueMath").innerHTML = ((parseInt(document.getElementById("TabCritClassHrWeakAttackCriticalValueDamage").innerHTML) - 100) * CritRate / 100 + 100).toFixed(2) + "%";
		CritMath = parseFloat(document.getElementById("TabCritClassNaturalValueMath").innerHTML);
		CritMath *= parseFloat(document.getElementById("TabCritClassHuFuryStanceCriticalValueMath").innerHTML);
		CritMath *= parseFloat(document.getElementById("TabCritClassFiCriticalStrikeValueMath").innerHTML);
		CritMath *= parseFloat(document.getElementById("TabCritClassFiStanceCriticalValueMath").innerHTML);
		CritMath *= parseFloat(document.getElementById("TabCritClassGuTwinMachineGunMasteryValueMath").innerHTML);
		CritMath *= parseFloat(document.getElementById("TabCritClassGuZeroRangeCriticalValueMath").innerHTML);
		CritMath *= parseFloat(document.getElementById("TabCritClassBrKatanaGearValueMath").innerHTML);
		CritMath *= parseFloat(document.getElementById("TabCritClassBrStanceCriticalValueMath").innerHTML);
		CritMath *= parseFloat(document.getElementById("TabCritClassBoStanceCriticalValueMath").innerHTML);
		CritMath *= parseFloat(document.getElementById("TabCritClassHrWeakAttackCriticalValueMath").innerHTML);
		document.getElementById("TabCritMath").innerHTML = (CritMath / 1000000000000000000).toFixed(2) + "%";
	}