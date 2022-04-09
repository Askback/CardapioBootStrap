var buttonPlus  = $(".cart-qty-plus");
var buttonMinus = $(".cart-qty-minus");

var incrementPlus = buttonPlus.click(function() 
{
	var $n = $(this)
		.parent(".counter")
		.parent(".card-body")
		.find(".qty");
	$n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() 
{
		var $n = $(this)
		.parent(".counter")
		.parent(".card-body")
		.find(".qty");
	var amount = Number($n.val());
	if (amount > 0) 
	{
		$n.val(amount-1);
	}
});

var modal_body = document.getElementById('modal-body');

function Calc() 
{
	
	modal_body.innerHTML = `<br>Prezado(a) <strong>${document.getElementById('inputNome').value}</strong><br>
                        Dados referentes ao seu pedido.<br>
                        
                       O seu pedido é:<br><br>`;
						showData();

}

var prods = 
[
    { id: 1, name: 'Rodizio completo', price: 95},
    { id: 2, name: 'Prato sortido', price: 20},
    { id: 3, name: 'Linguiça cavalar', price: 40},
    { id: 4, name: 'Prato sortido especial', price: 30},
    { id: 5, name: 'Camarão na manteiga', price: 40},
    { id: 6, name: 'Bife no ponto', price: 55},
]

function showData() 
{
    var quantities = document.getElementsByName('qty');
    var formatter = new Intl.NumberFormat('pt-BR', 
	{
        style: 'currency',
        currency: 'BRL',
    });
    var soma = 0;
	var Zero = 0;

    for(let input of quantities)
	{
        if(input.value > 0)
		{
			var mult = input.value * prods[input.id-1].price;
            modal_body.innerHTML += `<li>Prato: ${prods[input.id-1].name} - Preço unitário: ${formatter.format(prods[input.id-1].price)} - Quantidade: ${input.value} - Total: ${formatter.format(mult)}</li>`;
            soma += mult;
			Zero++;
        } 
    } 

	if(Zero == 0)
	{
		modal_body.style.color = 'Red';
		modal_body.style.textAlign = 'center';

		modal_body.innerHTML = '<h3>Selecione pelo menos um prato.</h3>'

		return
	} 
	else 
	{
		modal_body.style.color = 'Black';
		modal_body.style.textAlign = 'left';
	}
	
	
	modal_body.style.marginLeft = '20px';
    var total = document.createElement('h3');
    total.innerHTML = `<br>Preço total ${formatter.format(soma)}<br>`;
    modal_body.appendChild(total);
    

    return;
}