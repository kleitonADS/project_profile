// PROJECT

var imgmac = document.getElementsByClassName('macbook')['0'].height;
var newheightgif = (imgmac - 47);

document.getElementsByClassName('gifmac')['0'].height = newheightgif;

var itensImgProj = document.getElementsByClassName("imglist-proj");
var titlePro = document.getElementById('nameproj');
var descPro = document.getElementById('descproj');
var linkvproj = document.getElementById('linkviewproj');
var linkcproj = document.getElementById('linkcodeproj');
var imgGif =document.getElementsByClassName('gifmac')['0'];
var intProj = document.getElementById('count_proj');

intProj.innerHTML = itensImgProj.length;

		for (var i = 0; i < itensImgProj.length; i++) {

			itensImgProj[i].addEventListener('click', function() {
				var itenp = this.children[0].name;

				switch (itenp) {

					case 'MY PROFILE':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = " That webpage has been created using HTML5, JavaScript, SASS, CSS3 with Flexbox for reponsive page, jQuery, Photoshop for designer creation, Git and Github, some JS frameworks to streamline and optimize the coding process, NodeJs, Gulp , Jade, Autoprefixer, Plumber, Uglify, Imagmim and Browser-sync. ";
						linkvproj.href = "#";
						linkcproj.href = "https://github.com/kleitonADS/profile";
						imgGif.src = 'img/profileproj.gif';

						$('.list_tool_profile').show('slow');
						$('.list_tool_feedback').hide('slow');
						$('.list_tool_basefe').hide('slow');
						break;

					case 'SYSTEM FEEDBACK':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "System created to show a system in PHP used MSQL database for data persistence and MVC methodology can add new feedback, list, view, disable, mark as checked, delete, do searches through various parameters.";
						linkvproj.href = "https://feedbackproject.000webhostapp.com/";
						linkcproj.href = "https://github.com/kleitonADS/feedbackphp";
						imgGif.src = 'img/feedback.gif';
						$('.list_tool_feedback').show('slow');
						$('.list_tool_profile').hide('slow');
						$('.list_tool_basefe').hide('slow');
						break;

					case 'PROJECT BASE FRONT-END':
						titlePro.innerHTML = itenp;
						descPro.innerHTML = "Base project was created used new technologies for the more agility in front-end development, made the project source code cleaner by using various javascripts packages.";
						linkvproj.href = "https://github.com/kleitonADS/jsBaseProject";
						linkcproj.href = "https://github.com/kleitonADS/jsBaseProject";
						imgGif.src = 'img/basefe.gif';
						$('.list_tool_feedback').hide('slow');
						$('.list_tool_profile').hide('slow');
						$('.list_tool_basefe').show('slow');
						break;


					default:
						// code
						break;
				}
			});
		}