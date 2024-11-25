const catalog = document.getElementById('catalog');

fetch('https://dummyjson.com/carts')
      .then(values =>values.json())
      .then(objectCards =>{
          const {carts} = objectCards;
          console.log(carts);

          for (const card of carts) {
              const blockCard = document.createElement('div');
              blockCard.classList.add('blockCard');
              const informationCard = document.createElement('p');
              informationCard.innerText =`
              total: ${card.total};
              discountedTotal: ${card.discountedTotal};
              userId: ${card.userId};
              totalProducts: ${card.totalProducts};
              totalQuantity: ${card.totalQuantity};
              `
              blockCard.appendChild(informationCard);




              const olListItem = document.createElement('ol');
              olListItem.classList.add('olListItem');
              for (const product of card.products) {
                  const liListItem = document.createElement('li');
                  liListItem.classList.add('liListItem');
                  liListItem.innerText = `
                  Id: ${product.id};
                  Title: ${product.title};
                  Price: ${product.price};
                  Quantity: ${product.quantity};
                  Total: ${product.total};
                  Discount: ${product.discountPercentage};
                  Discount total: ${product.discountedTotal};
                  `

                  const image = document.createElement('img');
                  image.src = product.thumbnail;

                  olListItem.appendChild(liListItem);
                  liListItem.appendChild(image);
              }

              blockCard.appendChild(olListItem);
              catalog.appendChild(blockCard);
          }
      });