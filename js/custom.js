	var a = 0;
	$(window).scroll(function() {

		var oTop = $('.count').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
            //alert('finished');
        }
    });
			});
			a = 1;
		}
	});

	$(document).ready(function() {
		$('.service_tab').on('click',function(){
			var _this =$(this);
			var _thisTarget = _this.attr('rel');
			InitTabService(_thisTarget)
		});
		$(".center").slick({
			dots: true,
			infinite: true,
			centerMode: true,
			slidesToShow: 5,
			slidesToScroll: 3
		});
		$("#navbar").click(function(){
			$("#nav_wrapper").toggle().toggleClass("device");
		});

		$(document).on('click','.submit_form',function(){
			$('.check').each(function(index, element) {
				if ($(this).val() != '') {
					$(this).removeClass("highlight");
					if ( $( this ).is( ".last" ) ) {
						window.location.href="index.html";
					}
				}else{
					$(this).addClass("highlight");
					return false
				}
			});
		});
		$('.form .check').focusin(function(){
			$(this).css("border-color","#32465994","!important").removeClass("highlight");
		}).focusout(function(){
			$(this).css("border-color","#e1e1e1","!important").removeClass("highlight");
		});
	});

	function InitTabService(ele){
		$(".test").hide();
		$("#"+ele).show();
		$('.service_tab').removeClass('active');
		$('.service_tab[rel="'+ele+'"]').addClass('active');
	}
