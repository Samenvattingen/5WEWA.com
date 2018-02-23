window.onload = mobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function openNav() {
		document.getElementById("navBar").style.width = "250px";
		document.getElementById("navBar").style.fontSize = "25px";
};
function closeNav() {
		document.getElementById("navBar").style.width = "0";
};
function summ_aard() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_aard.pdf');
			closeNav();
			closeAard();		
};
function summ_bio() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_bio.pdf');
			closeNav();
			closeBio();		
};
function summ_chem_atom() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_chem_atom.pdf');
			closeNav();
			closeChem();		
};
function summ_chem_even() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_chem_even.pdf');
			closeNav();
			closeChem();		
};
function summ_eng_u3_4() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_eng_u3_4.pdf');
			closeNav();
			closeEng();	
};
function summ_frans_pronom() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_frans_pronom.pdf');
			closeNav();
			closeFrans();	
};
function summ_fys() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_fys.pdf');
			closeNav();
			closeFys();		
};
function summ_strijd() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_strijd.pdf');
			closeNav();
			closeGesch();		
};
function summ_wisk_complex() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_wisk_complex.pdf');
			closeNav();
			closeWisk();		
};
function summ_wisk_funct() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_wisk_funct.pdf');
			closeNav();
			closeWisk();	
};
function summ_wisk_gon() {
		var objData = document.getElementById('pdf');
			objData.setAttribute('data', 'https://docs.google.com/gview?embedded=true&url=https://stepantaz.github.io/summ_wisk_gon.pdf');
			closeNav();
			closeWisk();		
};
function home() {
	if (isMobile.any()) {
		objData = document.getElementById('pdf')
		objData.setAttribute('data', 'homeMobile.html');
		}
		else {
		objData = document.getElementById('pdf')
		objData.setAttribute('data', 'home.html');
		}
	closeNav();
}
function aard() {
	document.getElementById('aard').style.display = "block";
}
function bio() {
	document.getElementById('bio').style.display = "block";
}
function eng() {
	document.getElementById('eng').style.display = "block";
}
function chem() {
	document.getElementById('chem').style.display = "block";
}
function frans() {
	document.getElementById('frans').style.display = "block";
}
function fys() {
	document.getElementById('fys').style.display = "block";
}
function gesch() {
	document.getElementById('gesch').style.display = "block";
}
function wisk() {
	document.getElementById('wisk').style.display = "block";
}
function closeAard() {
	document.getElementById('aard').style.display = "none";
}
function closeBio() {
	document.getElementById('bio').style.display = "none";
}
function closeChem() {
	document.getElementById('chem').style.display = "none";
}
function closeEng() {
	document.getElementById('eng').style.display = "none";
}
function closeFys() {
	document.getElementById('fys').style.display = "none";
}
function closeFrans() {
	document.getElementById('frans').style.display = "none";
}
function closeGesch() {
	document.getElementById('gesch').style.display = "none";
}
function closeWisk() {
	document.getElementById('wisk').style.display = "none";
}
function mobile() {
	if (isMobile.any()) {
		var popupContent = document.getElementsByClassName('popup_content');
		var navList = document.getElementsByClassName('navList');
		var home = document.getElementsByClassName('home');
		var txt = document.getElementsByClassName('txt');
		for (var i = 0; i < popupContent.length; i++) {
			//alert("MOBILE");
			popupContent[i].style.width = "80%";
			popupContent[i].style.height = "80%";
			popupContent[i].style.fontSize = "20px";
			popupContent[i].style.marginTop = '10%';
		}
		for (var i = 0; i < navList.length; i++) {
			navList[i].style.fontSize = "20px";
		}
		objData = document.getElementById('pdf')
		objData.setAttribute('data', 'homeMobile.html');
	}
}
