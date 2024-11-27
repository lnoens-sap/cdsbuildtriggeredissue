export default function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _cdsbuildtriggeredissueService = context.executeAction('/mymdkapplication/Actions/cdsbuildtriggeredissueService/Service/InitializeOnline.action');

    //You can add more service initialize actions here

    return Promise.all([_cdsbuildtriggeredissueService]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/mymdkapplication/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}