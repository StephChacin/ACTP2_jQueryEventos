
// alert("hola");

$(function() {
	console.log('ok!')

  // Código


	$(".cards").on("click", ".card", function(event){
		event.preventDefault();
		$(this).toggleClass("card--open");
	});

	$(".cards").on("click", ".card__like", function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass("card__like--red");
	});

	$(".cards").on("click", ".card__follow-btn", function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass("card__follow-btn--following");
		// var follow = parseInt($(this).parent().siblings(".social").find(".social__number").eq(2).text())
		
		if ($(this).hasClass("card__follow-btn--following")) {
			$(this).text("Siguiendo");

			} else {
			$(this).text("Seguir")
		}

	});

	//Usar id para no seleccionar ambos con la misma clase!!
	
	$("#image").change(function(event){
	//$(this).val();
	var bautizo = this.value;
	var imagen_bautizo = "assets/images/squared/"+bautizo;
	$(".create__image").children().attr("src", imagen_bautizo)
	});

	$("#author").change(function(event){
	//$(this).val();
	var author = this.value;
	var imagen_author = "assets/images/profiles/"+author;
	$(".create__profile").children().attr("src", imagen_author)
	});

	$('form.create__form').on('submit', function(e){
		e.preventDefault();
		
		var _this = $(this);
		var social_n = $("#name").val();
		var name = _this.find('[name="author"]').children(":selected").text(); //otra forma de hacerlo
		var social_f = $("#followers").val();
		var social_l = $("#likes").val();
		var social_s = $("#following").val();
		var imagenes = $(".create__image").children("img").attr("src")
		var imagen_author = $(".create__profile").children("img").attr("src")
		
		$(".cards").append(
			// ``
			'<li class="card">' + 
			'<div class="card__highlight">' +
			'<img class="card__img" src="'+ imagenes +'" alt="">' +
			'</div>' +
			'<div class="card__content">' +
			'<div class="card__profile-container">' +
			'<img class="card__profile" src="'+ imagen_author +'" alt="">' +
			'</div>' +
			'<a class="card__like" href="#">'+
			'<i class="fas fa-heart"></i>'+
			'</a>'+
			'<div class="card__title">'+
			'<h2>'+ social_n +'</h2>'+
			'</div>'+
			'<div class="card__author">'+
			'<h3 class="card__author-name">' +name +'</h3>'+
			'</div>'+
			'<div class="card__hidden">'+
			'<ul class="social">'+
			'<li class="social__element">'+
			'<div class="social__number">'+ social_f +'</div>'+
			'<div class="social__text">Followers</div>'+
			'</li>'+
			'<li class="social__element">' +
			'<div class="social__number">'+ social_l +'</div>' +
			'<div class="social__text">Likes</div>' +
			'</li>' +
			'<li class="social__element">' +
			'<div class="social__number">'+ social_s +'</div>'+
			'<div class="social__text">Following</div>'+
			'</li>'+
			'</ul>'+
			'<div class="card__follow">'+
			'<button class="card__follow-btn">Seguir</button>'+
			'</div>'+
			'</div>'+
			'</div>'+
			'</li>'
			)

		$("#name").val(" ");
		_this.find('[name="author"]').children(":selected").text(); //otra forma de hacerlo
		$("#followers").val(" ");
		$("#likes").val(" ");
		$("#following").val(" ");
		//$(".create__image").children("img").attr("src")
		//$(".create__profile").children("img").attr("src")

	});



});

