app.controller('InicioCtrl', function($scope){

	$scope.colunas = [
        { "title": "Engine", "field": "name" },
        { "title": "Browser", "field": "nav" },
        { "title": "Platform", "field": "so" },
        { "title": "Version", "field": "note", "class": "center" },
        { "title": "Grade", "field":"id", "class": "center" }
    ];

	$scope.dataSet = [	    
	    [{'name':'Trident'},{'nav':'Internet Explorer 7'},{'so':'Win XP SP2+'},{'note':'7'},{'id':'28'}]
	];

	$scope.colunas2 = [
        { "title": "Engine" },
        { "title": "Browser" }        
    ];

    $scope.dataSet2 = [	    
	    ['Trident','Internet Explorer 7'],
	    ['Trident','AOL browser (AOL desktop)'],	    
	    ['Gecko','Mozilla 1.7'],
	    ['Gecko','Mozilla 1.8'],
	    ['Gecko','Seamonkey 1.1'],
	    ['Gecko','Epiphany 2.20'],	    
	    ['Webkit','iPod Touch / iPhone'],
	    ['Other browsers','All others']
	];
});