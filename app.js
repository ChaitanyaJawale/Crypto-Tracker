const form = document.querySelector('#searchForm');
const res = document.querySelector('#resTable');
const cont = document.getElementById("allContaint");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ctype = form.elements.coinType.id;
    cont.classList.add('mainClick');
    cont.classList.remove('main');    
    fetchPrice(ctype);
});

const fetchPrice = async(ctype) =>{
    const r = await axios.get(`https://api.coinlore.net/api/ticker/?${ctype}`);
    showPrice(r.data.coin);
}


const showPrice = (coinData)=>{
    const price = coinData.price;
    const vol = coinData.volume;
    const change = coinData.priceChange1d;
    const coin = coinData.name;
    const curr = 'USD';
    var col= "green";
    if(change<0){
        col = "red";
    }
    res.innerHTML = `<tr class="bg-dark" style="color: white;">
    <td>
        Property
    </td>
    <td>
        Value
    </td>
</tr>
<tr>
    <td>${coin}</td>
    <td style="color:black;"><span style="font-size: 1.3em;">${price}</span> ${curr}</td>
</tr>
<tr>
    <td>Volume</td>
    <td>${vol}</td>
</tr>
<tr>
    <td>Change</td>
    <td style="color:${col};">${change} ${curr}</td>
</tr>`;

};
