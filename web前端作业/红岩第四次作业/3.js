function change(str) 
{
    var arr = str.split('-');
    return arr.map(function (item, index) 
    {
        if (index === 0) 
        {
            return item;
        }
        else 
        {
            return item[0].toUpperCase() + item.slice(1);
        }
    }).join('')
}
console.log(change('can-enter-volunteer-organization'));