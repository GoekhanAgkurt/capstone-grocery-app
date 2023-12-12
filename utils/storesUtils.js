export async function addStore(store) {
  const response = await fetch("/api/stores", {
    method: "POST",
    body: JSON.stringify(store),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.error(`Error: ${response.status}`);
  }
}

export async function updateStore(store) {
  const response = await fetch(`/api/stores/${store._id}`, {
    method: "PATCH",
    body: JSON.stringify(store),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.error(`Error:${response.status} `);
  }
}

export async function deleteStore(storeIdToDelete) {
  const allProductsResponse = await fetch("/api/products");
  const products = await allProductsResponse.json();
  const productsWithDeletedStore = products.filter(
    (product) => product.selectedStore === storeIdToDelete
  );
  await Promise.all(
    productsWithDeletedStore.map(async (product) => {
      const responseProduct = await fetch(`/api/products/${product._id}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...product,
          selectedStore: null,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!responseProduct.ok) {
        console.error(`Error:${responseProduct.status} `);
      }
    })
  );

  const response = await fetch(`/api/stores/${storeIdToDelete}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    console.error(`Error:${response.status} `);
  }
}
