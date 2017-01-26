$(function() 
{
	$.each($('.overflowToggler'), function (index, item)
	{
		overflowTogglerInitialize($(item));
	});
	
	jQuery.fn.extend(
	{
		overflowToggler: function() 
		{
			overflowTogglerInitialize(this);
		}
	});
});

function overflowTogglerInitialize(item)
{
	//handles situations where there was previously no overflow, but now there is overflow
	function handleNewOverflow(item)
	{
		var container = $("<div>").addClass("overflowToggler-container");
		
		item.before(container);
		container.append(item);
		
		var toggle = $("<div>").addClass("overflowToggler-toggler").addClass("closed");
		var toggleIcon = $("<div>").text("...").addClass("overflowToggler-toggleIcon");

		item.parent().append($("<div>").addClass("overflowToggler-contentSpacer"));

		toggle.append(toggleIcon);
		item.parent().append(toggle);
		item.parent().addClass("closed");

		toggle.click(function ()
		{
			$(this).toggleClass("open closed");
			$(this).parent().toggleClass("open closed");
		});
	}
	
	//if the item hasn't been initialized yet
	if(item.hasClass('overflowToggler') || !item.hasClass("overflowToggler-content"))
	{
		item.removeClass('overflowToggler');
		item.addClass("overflowToggler-content");
		
		//if there's overflow
		if (hasVerticalOverflow(item[0]))
			handleNewOverflow(item);
	}
	else	//already initialized
	{
		var container = item.parent();
		var toggler = container.find("> .overflowToggler-toggler");
		
		//if there wasn't overflow last time it was initialized
		if(toggler == null || toggler.length == 0)
			handleNewOverflow(item);
		else //there was overflow last time it was initialized
		{
			//close it if it was open
			if(toggler.hasClass("open"))
			{
				toggler.toggleClass("open closed");
				toggler.parent().toggleClass("open closed");
			}
			
			//if there's no overflow now
			if (!hasVerticalOverflow(item[0]))
			{
				container.after(item);
				container.remove();
			}
		}
	}
}

function hasVerticalOverflow(element)
{
	return element.scrollHeight > element.clientHeight;
}