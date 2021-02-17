
params = new URLSearchParams(window.location.search)

async function displayPrices(type, price, stop){

    if (!type) return

    await new Promise(r => setTimeout(r, 1000)); // give some time for DOM to load

    type = type.toUpperCase()
    if(type === 'SELL') { // Buy is default
        document.querySelectorAll('[data-testid=SellTab]')[0].click()
    }

    if (!price && !stop){ //Market order
        document.querySelectorAll('[data-testid=MarketType]')[type === 'BUY' ? 0:1].click()
    }

    if (price && stop){ //OCO order
        document.querySelectorAll('[data-testid=otherType]')[type === 'BUY' ? 0:1].click()
        Array.from(document.querySelectorAll('span')).find(a => a.textContent === 'OCO').click()
    }

    if (!price && stop){ // stop limit order
        document.querySelectorAll('[data-testid=stopLimit]')[type === 'BUY' ? 1:3].click()
    }

    if(price){
        let input = document.createElement("input")
        input.type = "text"
        input.value = price
        document.getElementById('FormRow-' + type + '-price').parentElement.parentElement.prepend(input)
    }

    if (stop){
        let input = document.createElement("input")
        input.type = "text"
        input.value = stop
        document.getElementById('FormRow-' + type + '-stopPrice').parentElement.parentElement.prepend(input)
    }

    if(params.get('marketFirst') && params.get('marketFirst') != '0'){ // show Market first
        if(type === 'BUY')
            document.querySelectorAll('[data-testid=SellTab]')[0].click()
        else
            document.querySelectorAll('[data-testid=BuyTab]')[0].click()

        document.querySelectorAll('[data-testid=MarketType]')[type === 'BUY' ? 1:0].click()
    }
}

displayPrices(params.get('type'), params.get('price'), params.get('stop'))


