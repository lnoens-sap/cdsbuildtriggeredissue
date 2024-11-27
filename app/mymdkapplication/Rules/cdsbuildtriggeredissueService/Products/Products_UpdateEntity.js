export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/mymdkapplication/Services/cdsbuildtriggeredissueService.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/mymdkapplication/Actions/cdsbuildtriggeredissueService/Products/Products_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/mymdkapplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Products'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/mymdkapplication/Actions/cdsbuildtriggeredissueService/Products/Products_UpdateEntity.action');
    }
}