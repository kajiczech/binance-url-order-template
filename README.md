# Binance URL order template

This plugin will help you to easily share and consume Binance order templates

When you want to share your order configuration, you can now share it with your peers - just add some data at the end of the regular URL of binance trading pair.
Based on this data, correct order type is selected and amounts displayed next to price and stop price fields.

*Unfortunately I wasn't able to prefill the inputs directly, because of binance's scripts which immediately override it back (the value is stored in some javascript controller which I was unable to find*

### Example
Regular url looks like
```
https://www.binance.com/en/trade/BTC_USDT
```

With this plugin, you can add 4 parameters behind it. Then you can send the link to your peers and they can conveniently create their order based on your inputs just by clicking on the link.

Lets say we want to buy some bitcoin for market price and set up some profit and stoploss targets.
We will set type to sell, price 55000 - this is our target and we want to set the stoploss on 40k. The marketFirst parameter says that the peer will be shown a market order of an opposite type first.
```
https://www.binance.com/en/trade/BTC_USDT?type=SELL&marketFirst=1&price=55000&stop=40000.22
```

Video example: https://youtu.be/XJgYx6lSf2c

## Parameter description

 - type  - BUY or SELL (case insensitive)
 - price - this number will be shown next to the price in the order
 - stop  - this number will be shown next to the stop price in the order
 - marketFirst - if included and not zero, it will first select Market order of opposite type
 
 When both price and stop are present OCO order is selected
 When only price is present, limit order is selected.
 When only stop is present, stop-limit order is selected
 When both price and stop are not present, market order is selected
