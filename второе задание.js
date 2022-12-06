function cart(basketAmount, countGoods, promo = null) {
    let totalAmount = basketAmount;
    
    if (promo = 'отдаем300' && basketAmount < 300) {
    totalAmount = 0;
    console.log('отдаем300 ' + totalAmount);
    } else if (promo = 'отдаем300') {
    totalAmount -= 300;
    console.log('отдаем300 ' + totalAmount);
    }
    
    if (countGoods >= 10) {
    const countFiveProcent = basketAmount/100*5;
    totalAmount -= countFiveProcent;
    console.log('больше 10 товаров ' + totalAmount);
    }
    
    if (basketAmount > 50000) {
    const countTwentyProcent = totalAmount/100*20;
    const countDifference = totalAmount - 50000;
    totalAmount = countDifference - countTwentyProcent;
    console.log('больше 50 000 ₽ ' + totalAmount);
    }
    
    if (promo = 'СКИДКА20' && basketAmount >= 20000) {
    const countFifteenProcent = totalAmount/100*20;
    totalAmount -= countFifteenProcent;
    console.log('СКИДКА20 ' + totalAmount);
    }
    console.log('Стоимость равна ' + totalAmount);
    }
    
    cart(100000, 12, 'отдаем300');
