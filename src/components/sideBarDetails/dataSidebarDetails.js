
const sideBarItems = [
    {
        _id: 1,

        categorie: 'Téléphone & Tablette',
        childrenelts:[
            {
                type: 'Téléphone portable',
                titleArray:['Téléphones Basics','iphone']
            },
            {
                type: 'Tablettes',
                titleArray:['Tablette','Accessoires Tablette']
            }
        ]

    },
    {
        _id: 2,

        categorie: 'Mode',
        childrenelts:[
            {
                type: 'Mode Homme',
                titleArray:['chaussures','vetements']
            },
            {
                type: 'Mode Femme',
                titleArray:['chaussures','vetements']
            },
            {
                type: 'Accessoires Homme',
                titleArray:['montres','bijoux']
            },
            {
                type: 'Accessoires Femme',
                titleArray:['montres','montres']
            }
        ]

    },
    {
        _id: 3,

        categorie: 'Informatique',
        childrenelts:[
            {
                type: 'Ordinateurs',
                titleArray:['Téléphones Basics','iphone']
            },
            {
                type: 'Imprimantes',
                titleArray:['Tablette','Accessoires Tablette']
            },
            {
                type: 'Accessoires',
                titleArray:['clé USB','disques durs','Clavier & souris']
            }
        ]

    },
    {
        _id: 4,

        categorie: 'Jeux vidéos',
        childrenelts:[
            {
                type: 'Jeux',
                titleArray:['FIFA 30','FIFA31','GTA V','Blur']
            },
            {
                type: 'Mannetes',
                titleArray:['Mannete PC','Mannetes PS5','Mannetes PS4']
            }
        ]

    },
    {
        _id: 5,

        categorie: 'Articles de sport',
        childrenelts:[
            {
                type: 'Plein Air',
                titleArray:['Vélo','Camping & randonnée']
            },
            {
                type: 'Sport',
                titleArray:['accessoires de Musculation','Yoga','Natation','Box']
            }
        ]

    },

];

export default sideBarItems;