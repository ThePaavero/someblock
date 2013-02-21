/**
 * Starter
 * @package SomeBlock
 */

window.SomeBlock = {};

SomeBlock = function() {

	var dev_identifiers = [
		'dev.act',
		'/dev/',
		'staging/',
		'/development/',
		'someblock'
	];

	var dev_environment = false;

	for(var i in dev_identifiers)
	{
		if(window.location.href.indexOf(dev_identifiers[i]) > -1)
		{
			dev_environment = true;
			break;
		}
	}

	if(dev_environment === false)
	{
		return false;
	}

	var blockees = {};

	this.init = function()
	{
		runLoadedModules();

		var intervals = [100, 1000, 2000, 3000, 4000, 5000];
		var i;

		for(i in intervals)
		{
			setTimeout(runLoadedModules, intervals[i]);
		}
	};

	var runLoadedModules = function()
	{
		$('.someblock_blocker').remove();

		var i, x;

		for(i in SomeBlock.Modules)
		{
			var m = new SomeBlock.Modules[i]();
			var elements = m.getBlockees();
			blockElements(elements);
		}
	};

	var blockElements = function(elements)
	{
		$(elements).each(function()
		{
			blockElement($(this));
		});
	};

	var blockElement = function(el)
	{
		if(typeof $(el).offset().top === 'undefined')
		{
			return false;
		}

		var blocker = document.createElement('div');
		blocker.className = 'someblock_blocker';

		$(blocker).css({
			'position'   : 'absolute',
			'top'        : $(el).offset().top,
			'left'       : $(el).offset().left,
			'width'      : $(el).width(),
			'height'     : $(el).height(),
			'background' : 'red',
			'z-index'    : 9000,
			'opacity'    : 0.8
		});

		$('body').prepend(blocker);

		$(blocker).click(function()
		{
			alert('Blocked');
			return false;
		});
	};

};

// ---------------------------------------------------------------------------

SomeBlock.Modules = {};

// ---------------------------------------------------------------------------

$(function()
{
	var sb = new SomeBlock();
	sb.init();
});

// EOF