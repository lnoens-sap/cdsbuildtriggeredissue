export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/mymdkapplication/Services/cdsbuildtriggeredissueService.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/mymdkapplication/Actions/cdsbuildtriggeredissueService/Products/Products_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/mymdkapplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Products',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/mymdkapplication/Actions/cdsbuildtriggeredissueService/Products/Products_CreateEntity.action');
    }
}