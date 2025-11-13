 const MenuItems = {
        rice : 'Rice',
        noodles : 'Noodles',
        soup : 'Soup',
        drinks : 'Drinks'
 } as const;


 const newmenu =(use:keyof typeof MenuItems) => {
        return MenuItems[use];


 }

 