//lv0
const person = {
    name: 'THE9',
    number: 9,
    address: {
      meinv: 'Yushuxin',
      center: 'liuyuxin'
    }
  }

//lv1
function f(num) 
{
    if (num === 1||num === 2)
    {
        return 1;
    } 
    return f(num - 1) + f(num - 2);
}


       
    