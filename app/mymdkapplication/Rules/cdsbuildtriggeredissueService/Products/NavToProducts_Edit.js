export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/mymdkapplication/Services/cdsbuildtriggeredissueService.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/mymdkapplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Products'
                },
                'OnSuccess': '/mymdkapplication/Actions/cdsbuildtriggeredissueService/Products/NavToProducts_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/mymdkapplication/Actions/cdsbuildtriggeredissueService/Products/NavToProducts_Edit.action');
    }
}