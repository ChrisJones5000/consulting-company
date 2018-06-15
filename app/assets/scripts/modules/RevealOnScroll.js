import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, animation, offsetPercentage) {
		this.itemsToReveal = els;
		this.cssClass = animation;
		this.offsetPercentage = offsetPercentage;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass(this.cssClass);
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass(that.cssClass + '--is-visible');
				},
				offset: that.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;