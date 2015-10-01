(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('app', []).controller('mainCtrl', ['$scope', 'MD', function ($scope, MD) {

	window.SCOPE = $scope;
	var vm = this;
	vm.search = {
		query: ''
	};

	vm.movieItems = null;
	$scope.$watch(MD.getRes, function (res) {
		if (res) {
			vm.movieItems = res.results.filter(function (el) {
				return el.poster_path !== null;
			});
		}
	}, true);

	vm['do'] = function () {
		if (vm.search.query === '') return;
		MD.req(vm.search.query);
	};
}]).directive('movieItem', ['MD', function (MD) {

	function ctrl($scope, $element) {}

	return {
		restrict: 'E',
		replace: true,
		scope: {
			mv: '='
		},
		controller: ctrl,
		controllerAs: 'mvItem',
		templateUrl: 'src/template/mvItem.html'
	};
}]).factory('MD', ['$http', function ($http) {

	var API_KEY = '374c0342a6406dfe0aeb3de2ea042c59';
	var url = {
		search: 'http://api.themoviedb.org/3/search/movie'
		// search: 'http://api.themoviedb.org/3/search/multi'
	};
	var searchResult = null;

	function req(searchQuery) {

		$http({
			method: 'GET',
			url: url.search,
			params: {
				api_key: API_KEY,
				query: searchQuery
			}
		}).success(function (res) {
			searchResult = res;
			console.log(res);
		}).error(function (err) {
			console.error(err);
		});
	}

	function getRes() {
		return searchResult;
	}

	return {
		req: req,
		getRes: getRes
	};
}]);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi94YW1wcC9odGRvY3MvYXVjcy13ZWJkZXYtdGVybS1wcm9qZWN0L3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsT0FBTyxDQUFDLE1BQU0sQ0FBRSxLQUFLLEVBQUUsRUFBRSxDQUFFLENBQzFCLFVBQVUsQ0FBRSxVQUFVLEVBQUUsQ0FBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVcsTUFBTSxFQUFFLEVBQUUsRUFBSTs7QUFFbkUsT0FBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDdEIsS0FBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2QsR0FBRSxDQUFDLE1BQU0sR0FBRztBQUNYLE9BQUssRUFBRSxFQUFFO0VBQ1QsQ0FBQzs7QUFFRixHQUFFLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUNyQixPQUFNLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBVyxHQUFHLEVBQUc7QUFDMUMsTUFBSyxHQUFHLEVBQUc7QUFDVixLQUFFLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLFVBQVcsRUFBRSxFQUFHO0FBQ25ELFdBQU8sRUFBRSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUM7SUFDL0IsQ0FBRSxDQUFDO0dBQ0o7RUFDRCxFQUFFLElBQUksQ0FBRSxDQUFDOztBQUVWLEdBQUUsTUFBRyxHQUFHLFlBQVc7QUFDbEIsTUFBSyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUcsT0FBTztBQUNyQyxJQUFFLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLENBQUM7RUFDMUIsQ0FBQztDQUVGLENBQUUsQ0FBRSxDQUNKLFNBQVMsQ0FBRSxXQUFXLEVBQUUsQ0FBRSxJQUFJLEVBQUUsVUFBVyxFQUFFLEVBQUc7O0FBRWhELFVBQVMsSUFBSSxDQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUcsRUFFakM7O0FBRUQsUUFBTztBQUNOLFVBQVEsRUFBRSxHQUFHO0FBQ2IsU0FBTyxFQUFFLElBQUk7QUFDYixPQUFLLEVBQUU7QUFDTixLQUFFLEVBQUUsR0FBRztHQUNQO0FBQ0QsWUFBVSxFQUFFLElBQUk7QUFDaEIsY0FBWSxFQUFFLFFBQVE7QUFDdEIsYUFBVyxFQUFFLDBCQUEwQjtFQUN2QyxDQUFDO0NBRUYsQ0FBRSxDQUFFLENBQ0osT0FBTyxDQUFFLElBQUksRUFBRSxDQUFFLE9BQU8sRUFBRyxVQUFXLEtBQUssRUFBRzs7QUFFOUMsS0FBSSxPQUFPLEdBQUcsa0NBQWtDLENBQUM7QUFDakQsS0FBSSxHQUFHLEdBQUc7QUFDVCxRQUFNLEVBQUUsMENBQTBDOztFQUVsRCxDQUFDO0FBQ0YsS0FBSSxZQUFZLEdBQUcsSUFBSSxDQUFDOztBQUV4QixVQUFTLEdBQUcsQ0FBRSxXQUFXLEVBQUc7O0FBRTNCLE9BQUssQ0FBQztBQUNMLFNBQU0sRUFBRSxLQUFLO0FBQ2IsTUFBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNO0FBQ2YsU0FBTSxFQUFDO0FBQ04sV0FBTyxFQUFFLE9BQU87QUFDaEIsU0FBSyxFQUFFLFdBQVc7SUFDbEI7R0FDRCxDQUFDLENBQUMsT0FBTyxDQUFFLFVBQVUsR0FBRyxFQUFHO0FBQzNCLGVBQVksR0FBRyxHQUFHLENBQUM7QUFDbkIsVUFBTyxDQUFDLEdBQUcsQ0FBRSxHQUFHLENBQUUsQ0FBQztHQUNuQixDQUFFLENBQUMsS0FBSyxDQUFFLFVBQVcsR0FBRyxFQUFHO0FBQzNCLFVBQU8sQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFLENBQUM7R0FDckIsQ0FBRSxDQUFDO0VBRUo7O0FBRUQsVUFBUyxNQUFNLEdBQUc7QUFDakIsU0FBTyxZQUFZLENBQUM7RUFDcEI7O0FBRUQsUUFBTztBQUNOLEtBQUcsRUFBSCxHQUFHO0FBQ0gsUUFBTSxFQUFOLE1BQU07RUFDTixDQUFDO0NBRUYsQ0FBRSxDQUFFLENBQ0oiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiYW5ndWxhci5tb2R1bGUoICdhcHAnLCBbXSApXHJcbi5jb250cm9sbGVyKCAnbWFpbkN0cmwnLCBbICckc2NvcGUnLCAnTUQnLCBmdW5jdGlvbiAoICRzY29wZSwgTUQgKSAge1xyXG5cclxuXHR3aW5kb3cuU0NPUEUgPSAkc2NvcGU7XHJcblx0dmFyIHZtID0gdGhpcztcclxuXHR2bS5zZWFyY2ggPSB7XHJcblx0XHRxdWVyeTogJydcclxuXHR9O1xyXG5cclxuXHR2bS5tb3ZpZUl0ZW1zID0gbnVsbDtcclxuXHQkc2NvcGUuJHdhdGNoKCBNRC5nZXRSZXMsIGZ1bmN0aW9uICggcmVzICkge1xyXG5cdFx0aWYgKCByZXMgKSB7XHJcblx0XHRcdHZtLm1vdmllSXRlbXMgPSByZXMucmVzdWx0cy5maWx0ZXIoIGZ1bmN0aW9uICggZWwgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGVsLnBvc3Rlcl9wYXRoICE9PSBudWxsO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSwgdHJ1ZSApO1xyXG5cclxuXHR2bS5kbyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCB2bS5zZWFyY2gucXVlcnkgPT09ICcnICkgcmV0dXJuO1xyXG5cdFx0TUQucmVxKCB2bS5zZWFyY2gucXVlcnkgKTtcclxuXHR9O1xyXG5cclxufSBdIClcclxuLmRpcmVjdGl2ZSggJ21vdmllSXRlbScsIFsgJ01EJywgZnVuY3Rpb24gKCBNRCApIHtcclxuXHJcblx0ZnVuY3Rpb24gY3RybCggJHNjb3BlLCAkZWxlbWVudCApIHtcclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZToge1xyXG5cdFx0XHRtdjogJz0nXHJcblx0XHR9LFxyXG5cdFx0Y29udHJvbGxlcjogY3RybCxcclxuXHRcdGNvbnRyb2xsZXJBczogJ212SXRlbScsXHJcblx0XHR0ZW1wbGF0ZVVybDogJ3NyYy90ZW1wbGF0ZS9tdkl0ZW0uaHRtbCdcclxuXHR9O1xyXG5cclxufSBdIClcclxuLmZhY3RvcnkoICdNRCcsIFsgJyRodHRwJywgIGZ1bmN0aW9uICggJGh0dHAgKSB7XHJcblxyXG5cdHZhciBBUElfS0VZID0gJzM3NGMwMzQyYTY0MDZkZmUwYWViM2RlMmVhMDQyYzU5JztcclxuXHR2YXIgdXJsID0ge1xyXG5cdFx0c2VhcmNoOiAnaHR0cDovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZSdcclxuXHRcdC8vIHNlYXJjaDogJ2h0dHA6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbXVsdGknXHJcblx0fTtcclxuXHR2YXIgc2VhcmNoUmVzdWx0ID0gbnVsbDtcclxuXHJcblx0ZnVuY3Rpb24gcmVxKCBzZWFyY2hRdWVyeSApIHtcclxuXHJcblx0XHQkaHR0cCh7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRcdHVybDogdXJsLnNlYXJjaCxcclxuXHRcdFx0cGFyYW1zOntcclxuXHRcdFx0XHRhcGlfa2V5OiBBUElfS0VZLFxyXG5cdFx0XHRcdHF1ZXJ5OiBzZWFyY2hRdWVyeVxyXG5cdFx0XHR9XHJcblx0XHR9KS5zdWNjZXNzKCBmdW5jdGlvbiggcmVzICkge1xyXG5cdFx0XHRzZWFyY2hSZXN1bHQgPSByZXM7XHJcblx0XHRcdGNvbnNvbGUubG9nKCByZXMgKTtcclxuXHRcdH0gKS5lcnJvciggZnVuY3Rpb24gKCBlcnIgKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGVyciApO1xyXG5cdFx0fSApO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldFJlcygpIHtcclxuXHRcdHJldHVybiBzZWFyY2hSZXN1bHQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVxLFxyXG5cdFx0Z2V0UmVzXHJcblx0fTtcclxuXHJcbn0gXSApXHJcbjtcclxuIl19
