angular.module('ccHistory', [])
.factory('ccHistory', function() {
	var historyQueue = [];
	return {
		push: function(entry) {
			historyQueue.push(entry);
		},
		list: function() {
			return historyQueue;
		}
	};
});