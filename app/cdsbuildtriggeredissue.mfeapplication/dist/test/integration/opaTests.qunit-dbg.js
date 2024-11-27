sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cdsbuildtriggeredissue/mfeapplication/test/integration/FirstJourney',
		'cdsbuildtriggeredissue/mfeapplication/test/integration/pages/ProductsList',
		'cdsbuildtriggeredissue/mfeapplication/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cdsbuildtriggeredissue/mfeapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);