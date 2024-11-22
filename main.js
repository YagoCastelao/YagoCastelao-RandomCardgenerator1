const symbolList = ['♡', '♢', '♤', '♧'];
const valueList = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const getRandonizer = (list) => {
    let rnd = Math.random();   
    let item = Math.floor(rnd*(list.length));
    return list[item];
    };

const getRandomSymbol = () => {
    return getRandonizer(symbolList);
    };
    
const getRandomValue = () => {
    return getRandonizer(valueList);
    };

const setRizer = (seletor, value) => {
    document.querySelector(seletor).innerHTML = value;
};
    
const setSymbolValue = (symbol, selector) => {
    setRizer(selector, symbol);
    };
    
const setValueValue = (value) => {
    setRizer('#value', value);
    };

const playGame = () => {
    const symbol = getRandomSymbol();
    const value = getRandomValue ();
    setSymbolValue (symbol, '#symbol1');
    setSymbolValue (symbol, '#symbol2');
    setValueValue (value);
    }

