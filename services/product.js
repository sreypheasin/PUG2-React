// GET ALL PRODUCTS
export async function getAllProducts() {
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}`).then(
    (response) => response.json()
  );
  //   console.log("data", data);
  return data;
}

// GET PRODUCT BY ID
export async function getProductById(id) {
  const data = await fetch(`${import.meta.env.VITE_BASE_URL}/${id}`).then(
    (response) => response.json()
  );
  console.log("data by id", data);
  return data;
}
