export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/mymdkapplication/Services/cdsbuildtriggeredissueService.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/mymdkapplication/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Products'
                },
                'OnSuccess': '/mymdkapplication/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/mymdkapplication/Actions/CloseModalPage_Cancel.action');
    }
}