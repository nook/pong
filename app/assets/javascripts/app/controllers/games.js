angular.module('pong.controllers')
 .controller('GamesController',
 	function($scope) {
 		console.log("Inside the games controller");
 		// Some mock data for now -> although, seems SO realistic ;)
 		$scope.games = [
 			{
 				date: '06-27-2014',
 				player1: {
 					name: "Matt", 
 					score: 21
 				},
 				player2: {
 					name: "Dave", 
 					score: 18}
 			},
 			{
 				date: '06-27-2014',
 				player1: {
 					name: "Matt", 
 					score: 16
 				},
 				player2: {
 					name: "Dave", 
 					score: 21}
 			},
 			{
 				date: '06-27-2014',
 				player1: {
 					name: "Matt", 
 					score: 22
 				},
 				player2: {
 					name: "Dave", 
 					score: 20}
 			},
 			{
 				date: '06-27-2014',
 				player1: {
 					name: "Matt", 
 					score: 21
 				},
 				player2: {
 					name: "Billy", 
 					score: 8}
 			},
 			{
 				date: '06-27-2014',
 				player1: {
 					name: "Matt", 
 					score: 21
 				},
 				player2: {
 					name: "Billy", 
 					score: 18}
 			}
 		];
 	});

