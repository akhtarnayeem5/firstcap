using com.sap.learning as db from '../db/schema';

service CatalogService @(path: '/catalog') {

    entity Books as projection on db.Books {
        ID,
        title,        
        stock,
        price.amount as price,
        price.currency as currency,
        author.name as writer,
        isHardcover,
        author 
};
entity Authors as projection on db.Authors {
        *,
        epoch.name as epochName
    } excluding {
        createdAt,
        modifiedAt,
        createdBy,
        modifiedBy
    };
}