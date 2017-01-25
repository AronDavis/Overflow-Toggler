$(function() {

	$.each($('.overflowToggler'), function (index, item)
	{
		if (hasVerticalOverflow(item))
		{
			$(item).addClass("content");
			var container = $("<div>").addClass("overflowToggler").addClass("container");
			
			$(item).before(container);
			container.append(item);
			
			var toggle = $("<div>").addClass("overflowToggler").addClass("toggler").addClass("closed");
			var toggleIcon = $("<div>").text("...").addClass("overflowToggler").addClass("toggleIcon");

			$(item).parent().append($("<div>").addClass("overflowToggler").addClass("contentSpacer"));

			toggle.append(toggleIcon);
			$(item).parent().append(toggle);
			$(item).parent().addClass("closed");

			toggle.click(function ()
			{
				if ($(this).hasClass("closed"))
				{
					$(this).removeClass("closed");
					$(this).addClass("open");

					$(this).parent().removeClass("closed");
					$(this).parent().addClass("open");
				}
				else if ($(this).hasClass("open"))
				{
					$(this).removeClass("open");
					$(this).addClass("closed");

					$(this).parent().removeClass("open");
					$(this).parent().addClass("closed");
				}
			});
		}
        });
});		
function hasVerticalOverflow(element)
{
	return element.scrollHeight > element.clientHeight;
}