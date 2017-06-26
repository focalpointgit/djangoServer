 (function(){
                    'use strict';

                    angular
                        .module('scrumboard.demo', [])
                        .controller('ScrumboardController', ['$scope',scrumboardController]);
                    
                    function scrumboardController($scope) {
                        $scope.person = {
                            name:'Joe',
                            age:35
                        };

                        $scope.add = function(list,title) {
                            var card = {
                                title:title
                            };
                            list.cards.push(card);
                            $scope.$parent.new_title = null;
                            $scope.$apply();
                        };

                        $scope.data = [
                        {
                            name:'Django demo',
                            cards:[
                                {
                                    title:'Create Models'
                                }, {
                                    title:'Create View'
                                }, {
                                    title:'Migrate Database'
                                }
                            ]
                        }, {
                            name:'Angular demo',
                            cards: [
                            {
                                title:'Write HTML'
                            }, {
                                    title:'Create View'
                                }
                            ]
                        }
                        
                        ]
                    };
                    

               }());