using { cdsbuildtriggeredissue as my } from '../db/schema.cds';

@path : '/service/cdsbuildtriggeredissueService'
service cdsbuildtriggeredissueService
{
    @odata.draft.enabled
    entity Products as
        projection on my.Products;
}

annotate cdsbuildtriggeredissueService with @requires :
[
    'authenticated-user'
];
