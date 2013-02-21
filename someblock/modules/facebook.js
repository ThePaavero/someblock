/**
 * Module for Facebook
 * @package SomeBlock
 */
SomeBlock.Modules.Facebook = function() {

	this.getBlockees = function()
	{
		var elements = $('iframe[src*="facebook.com"]:visible, a[href*="facebook"]');
		return elements;
	};

};

// EOF