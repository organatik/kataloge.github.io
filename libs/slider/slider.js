jQuery(document).ready(function(){
	function htmSlider(){
		/* ������� ��������� ���������� */

		/* ������� �������� */
		var slideWrap = jQuery('.slide-wrap2');
		/* ������ �� ���������� ���������� ����� */
		var nextLink = jQuery('.next-slide2');
		var prevLink = jQuery('.prev-slide2');

		var is_animate = false;

		/* ������ ������ � ��������� */
		var slideWidth = jQuery('.slide-item2').outerWidth();

		/* �������� �������� */
		var newLeftPos = slideWrap.position().left - slideWidth;

		/* ���� �� ������ �� ��������� ����� */
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {

				slideWrap.animate({left: newLeftPos}, 450, function(){
					slideWrap
						.find('.slide-item2:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});

			}
		});

		/* ���� �� ������ �� ����������� ����� */
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {

				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item2:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);

			}
		});





	}

	/* ������������� ������� �������� */
	htmSlider();
});