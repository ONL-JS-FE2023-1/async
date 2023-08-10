const API_BASE = 'https://fakestoreapi.com/products';

const product = {
    title: 'Huawei PS120+',
    price: 100500,
    description: 'Telephone',
    image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/nova9-se/list/list-blue.png',
    category: 'Phones',
    rating: {
        rate: 5,
        count: 24
    }
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
}

fetch(API_BASE, options)
.then((response) => response.json())
.then((data) => console.log(data))


// Запит, який ми зробили, виглядає ось так:
/*

POST https://fakestoreapi.com:443/products HTTP/1.1
Content-Type: application/json

{
    "title": "Huawei PS120+",
    "price": 100500,
    "description": "Telephone",
    "image": "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/nova9-se/list/list-blue.png",
    "category": "Phones"
}

*/

/*

ДЗ
Створіть власний запит на створення товару (аналогічний)

*/