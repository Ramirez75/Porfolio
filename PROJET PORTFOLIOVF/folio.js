function augmenter()
{
	document.getElementsByClassName("reduit")[0].style.transform = "scale(1) rotate(0deg)";
	document.getElementsByClassName("slash")[0].style.transform = "rotate(-5deg)";
	document.getElementsByClassName("slash")[0].style.marginTop = "100px";
}
function scroll()
{
	if(window.scrollY > 100)
	{
	document.getElementsByClassName("MoiPage")[0].style.transform = "translateY(-50px)";
	document.getElementsByClassName("MoiPage")[0].style.opacity = "1";
	document.getElementsByClassName("Pdroite")[0].style.transform = "translateX(0px)";
	document.getElementsByClassName("Cercle1")[0].style.opacity = "1";
	document.getElementsByClassName("Cercle2")[0].style.opacity = "1";
	document.getElementsByClassName("Cercle3")[0].style.opacity = "1";
	document.getElementsByClassName("MParcours")[0].style.transform = "translateX(0px)";
	if(window.scrollY > 2000)
	{
	document.getElementsByClassName("cercle1G")[0].style.transform = "translateX(0px)";
	document.getElementsByClassName("text1G")[0].style.transform = "translateX(0px)";
	document.getElementsByClassName("cercle2G")[0].style.transform = "translateX(0px)";
	document.getElementsByClassName("text2G")[0].style.transform = "translateX(0px)";
	document.getElementsByClassName("cercle1R")[0].style.transform = "translateX(0px)";
	document.getElementsByClassName("text1R")[0].style.transform = "translateX(0px)";
	document.getElementsByClassName("cercle2R")[0].style.transform = "translateX(0px)";
	document.getElementsByClassName("text2R")[0].style.transform = "translateX(0px)";
	}
		if(window.scrollY > 2000)
		{
			document.getElementsByClassName("CercleLeft")[0].style.transform = "scale(1)";
			document.getElementsByClassName("CercleCenter")[0].style.transform = "scale(1)";
			document.getElementsByClassName("CercleRight")[0].style.transform = "scale(1)";
		}
	}
}

function easteregg()
{
	alert("Bravo t'es trop fort");
}

function click()
{
	document.getElementsByClassName("reduit").style.transform = "rotate(0deg) scale(1)";

}