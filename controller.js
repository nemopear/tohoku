angular
	.module('tohoku')
	.controller('BasicSliderCtrl', function($scope, $timeout) {
		$scope.slides = [
			'images/gallery/photos/01.jpg',
			'images/gallery/photos/02.jpg',
			'images/gallery/photos/04.jpg',
			'images/gallery/photos/05.jpg',
			'images/gallery/photos/06.jpg',
			'images/gallery/photos/07.jpg',
			'images/gallery/photos/08.jpg',
			'images/gallery/photos/09.jpg',
			'images/gallery/photos/010.jpg',
			'images/gallery/photos/011.jpg',
			'images/gallery/photos/012.jpg',
			'images/gallery/photos/013.jpg',
			'images/gallery/photos/014.jpg',
			'images/gallery/photos/015.jpg',
			'images/gallery/photos/016.jpg',
			'images/gallery/photos/017.jpg',
			'images/gallery/photos/018.jpg',
			'images/gallery/photos/019.jpg',
			'images/gallery/photos/020.jpg',
			'images/gallery/photos/021.jpg',
			'images/gallery/photos/022.jpg',
			'images/gallery/photos/023.jpg',
			'images/gallery/photos/024.jpg',
			'images/gallery/photos/025.jpg',
			'images/gallery/photos/026.jpg',
			'images/gallery/photos/027.jpg',
			'images/gallery/photos/028.jpg',
			'images/gallery/photos/029.jpg',
			'images/gallery/photos/030.jpg',
			'images/gallery/photos/031.jpg',
			'images/gallery/photos/032.jpg',
			'images/gallery/photos/033.jpg',
			'images/gallery/photos/034.jpg',
			'images/gallery/photos/035.jpg',
			'images/gallery/photos/036.jpg',
			'images/gallery/photos/037.jpg',
			'images/gallery/photos/038.jpg',
			'images/gallery/photos/039.jpg',
			'images/gallery/photos/040.jpg',
			'images/gallery/photos/041.jpg',
			'images/gallery/photos/042.jpg',
			'images/gallery/photos/043.jpg',
			'images/gallery/photos/044.jpg',
			'images/gallery/photos/045.jpg',
			'images/gallery/photos/046.jpg',
			'images/gallery/photos/047.jpg',
			'images/gallery/photos/048.jpg',
			'images/gallery/photos/049.jpg',
			'images/gallery/photos/050.jpg',
			'images/gallery/photos/051.jpg',
			'images/gallery/photos/052.jpg',
			'images/gallery/photos/053.jpg',
			'images/gallery/photos/054.jpg',
			'images/gallery/photos/055.jpg',
			'images/gallery/photos/056.jpg',
			'images/gallery/photos/057.jpg',
			'images/gallery/photos/058.jpg',
			'images/gallery/photos/059.jpg',
			'images/gallery/photos/060.jpg',
			'images/gallery/photos/061.jpg',
		];
	})


	.controller('WeavingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'basket-weaving/basket-01.jpg',
	    title: 'Pic 1'
	  }, {
	    src: 'basket-weaving/basket-02.jpg',
	    title: 'Pic 2'
	  }, {
	    src: 'basket-weaving/basket-03.jpg',
	    title: 'Pic 3'
	  }, {
	    src: 'basket-weaving/basket-04.jpg',
	    title: 'Pic 4'
	  }, {
	    src: 'basket-weaving/basket-05.jpg',
	    title: 'Pic 5'
	  }, {
			src: 'basket-weaving/basket-06.jpg',
			title: 'Pic 6'
	  }, {
	    src: 'basket-weaving/basket-07.jpg',
	    title: 'Pic 7'
	  }, {
	    src: 'basket-weaving/basket-08.jpg',
	    title: 'Pic 8'
	  }, {
	    src: 'basket-weaving/basket-09.jpg',
	    title: 'Pic 9'
	  }, {
	    src: 'basket-weaving/basket-10.jpg',
	    title: 'Pic 10'
	  }];
	})

	.controller('BlungingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'blunging/01.jpg',
	    title: 'Pic 1'
	  }, {
	    src: 'blunging/02.jpg',
	    title: 'Pic 2'
	  }, {
	    src: 'blunging/03.jpg',
	    title: 'Pic 3'
	  }, {
	    src: 'blunging/04.jpg',
	    title: 'Pic 4'
	  }, {
	    src: 'blunging/05.jpg',
	    title: 'Pic 5'
	  }, {
			src: 'blunging/06.jpg',
			title: 'Pic 6'
	  }, {
	    src: 'blunging/07.jpg',
	    title: 'Pic 7'
	  }, {
	    src: 'blunging/08.jpg',
	    title: 'Pic 8'
	  }, {
	    src: 'blunging/09.jpg',
	    title: 'Pic 9'
	  }, {
	    src: 'blunging/010.jpg',
	    title: 'Pic 10'
	  }, {
	    src: 'blunging/011.jpg',
	    title: 'Pic 11'
	  }, {
	    src: 'blunging/012.jpg',
	    title: 'Pic 12'
	  }];
	})

	.controller('StitchingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'stitching/01.jpg',
	    title: 'Pic 1'
	  }, {
	    src: 'stitching/02.jpg',
	    title: 'Pic 2'
	  }, {
	    src: 'stitching/03.jpg',
	    title: 'Pic 3'
	  }, {
	    src: 'stitching/04.jpg',
	    title: 'Pic 4'
	  }, {
	    src: 'stitching/05.jpg',
	    title: 'Pic 5'
	  }, {
			src: 'stitching/06.jpg',
			title: 'Pic 6'
	  }, {
	    src: 'stitching/07.jpg',
	    title: 'Pic 7'
	  }, {
	    src: 'stitching/08.jpg',
	    title: 'Pic 8'
	  }, {
	    src: 'stitching/09.jpg',
	    title: 'Pic 9'
	  }, {
	    src: 'stitching/010.jpg',
	    title: 'Pic 10'
	  }
	  , {
	    src: 'stitching/011.jpg',
	    title: 'Pic 11'
	  }
	  , {
	    src: 'stitching/012.jpg',
	    title: 'Pic 12'
	  }];
	})

	.controller('CastingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'casting/01.jpg',
	    title: 'Pic 1'
	  }, {
	    src: 'casting/02.jpg',
	    title: 'Pic 2'
	  }, {
	    src: 'casting/03.jpg',
	    title: 'Pic 3'
	  }];
	})

	.controller('WoodworkSliderController', function($scope) {
	  $scope.images = [{
	    src: 'woodwork/01.jpg',
	    title: 'Pic 1'
	  }, {
	    src: 'woodwork/02.jpg',
	    title: 'Pic 2'
	  }, {
	    src: 'woodwork/03.jpg',
	    title: 'Pic 3'
	  }, {
	    src: 'woodwork/04.jpg',
	    title: 'Pic 4'
	  }];
	})

	.controller('LacqueringSliderController', function($scope) {
	  $scope.images = [{
	    src: 'lacquering/01.jpg',
	    title: 'Pic 1'
	  }, {
	    src: 'lacquering/02.jpg',
	    title: 'Pic 2'
	  }, {
	    src: 'lacquering/03.jpg',
	    title: 'Pic 3'
	  },  {
	    src: 'lacquering/04.jpg',
	    title: 'Pic 4'
	  },  {
	    src: 'lacquering/05.jpg',
	    title: 'Pic 5'
	  },  {
	    src: 'lacquering/06.jpg',
	    title: 'Pic 6'
	  },  {
	    src: 'lacquering/07.jpg',
	    title: 'Pic 7'
	  },  {
	    src: 'lacquering/08.jpg',
	    title: 'Pic 8'
	  },  {
	    src: 'lacquering/09.jpg',
	    title: 'Pic 9'
	  },  {
	    src: 'lacquering/010.jpg',
	    title: 'Pic 10'
	  }];
	})

	.controller('PaintingSliderController', function($scope) {
	  $scope.images = [{
	    src: 'painting/01.jpg',
	    title: 'Pic 1'
	  }, {
	    src: 'painting/02.jpg',
	    title: 'Pic 2'
	  }, {
	    src: 'painting/03.jpg',
	    title: 'Pic 3'
	  },  {
	    src: 'painting/04.jpg',
	    title: 'Pic 4'
	  },  {
	    src: 'painting/05.jpg',
	    title: 'Pic 5'
	  },  {
	    src: 'painting/06.jpg',
	    title: 'Pic 6'
	  },  {
	    src: 'painting/07.jpg',
	    title: 'Pic 7'
	  },  {
	    src: 'painting/08.jpg',
	    title: 'Pic 8'
	  },  {
	    src: 'painting/09.jpg',
	    title: 'Pic 9'
	  },  {
	    src: 'painting/010.jpg',
	    title: 'Pic 10'
	  }];
	})
