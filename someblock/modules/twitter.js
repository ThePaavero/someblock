/**
 * Module for Twitter
 * @package SomeBlock
 */
SomeBlock.Modules.Twitter = function() {

	this.getBlockees = function()
	{
		var elements = $('iframe[src*="platform.twitter"]');
		return elements;
	};

};

// EOF