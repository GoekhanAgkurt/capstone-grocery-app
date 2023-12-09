export async function addProduct(product) {
  const response = await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.error(`Error: ${response.status}`);
  }
}

export async function updateProduct(product) {
  const response = await fetch(`/api/products/${product._id}`, {
    method: "PATCH",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.error(`Error:${response.status} `);
  }
}

export async function deleteProduct(id) {
  const response = await fetch(`/api/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    console.error(`Error:${response.status} `);
  }
}

export async function toggleOnShoppingList(product) {
  const response = await fetch(`/api/products/${product._id}`, {
    method: "PATCH",
    body: JSON.stringify({
      ...product,
      onShoppingList: !product.onShoppingList,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.error(`Error:${response.status} `);
  }
}

export async function toggleCheckedProduct(product) {
  const response = await fetch(`/api/products/${product._id}`, {
    method: "PATCH",
    body: JSON.stringify({
      ...product,
      checkedProduct: !product.checkedProduct,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    console.error(`Error:${response.status} `);
  }
}

export async function clearAllCheckedProducts() {
  const allProductsResponse = await fetch("/api/products");
  const products = await allProductsResponse.json();
  const checkedProductsOnList = products.filter(
    (product) => product.onShoppingList && product.checkedProduct
  );

  await Promise.all(
    checkedProductsOnList.map(async (product) => {
      const response = await fetch(`/api/products/${product._id}`, {
        method: "PATCH",
        body: JSON.stringify({
          ...product,
          checkedProduct: false,
          onShoppingList: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.error(`Error:${response.status} `);
      }
    })
  );
}
