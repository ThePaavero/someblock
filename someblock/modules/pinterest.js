/**
 * Module for Pinterest
 * @package SomeBlock
 */
SomeBlock.Modules.Pinterest = function() {

	this.getBlockees = function()
	{
		var elements = $('a[href*="pinterest.com"], img[src*="pinterest.com"], a[target*="_pinterest"] > i, span[class*="PIN_"]');
		return elements;
	};

};

// EOF