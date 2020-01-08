let add = (cart, req) => {
    cart.totalSum += req.body.product_price;
    cart.totalItem += req.body.quantity;
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};

let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    cart.totalSum += req.body.product_price;
    cart.totalItem += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};

let remove = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find), 1);
    cart.totalSum -= find.product_price;
    cart.totalItem -= find.quantity;
    return JSON.stringify(cart, null, 4);
};

let removeAll = (cart) => {
    cart.contents = [];
    cart.totalSum = 0;
    cart.totalItem = 0;
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    remove,
    removeAll
};