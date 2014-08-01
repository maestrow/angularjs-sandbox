angular.module('app', ['ngResource'])

.run(function(User) {
	var urlData = { userId: 1, option: true };
	var bodyData = { aaa: 'bbb' };
	User.save(urlData, bodyData);
})

.factory('User', function($resource) {
	return $resource('users/:userId', { 'userId': '@id' });
});