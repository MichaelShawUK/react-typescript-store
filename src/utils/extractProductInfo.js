function extract() {
  const product = JSON.parse(
    document
      .querySelector(".itemAddControls")
      .getElementsByTagName("script")[1]
      .textContent.slice(78, -2)
      .replaceAll("\n", "")
      .replace("Id:", '"id":')
      .replace("Name:", '"name":')
      .replace("Description:", '"description":')
      .replace("UnitPrice:", '"price":')
      .replace("Brand:", '"brand":')
      .replace("Category:", '"category":')
      .replace("Colour:", '"colour":')
      .replace("PrimaryImage:", '"image":')
      .replace("PreviousUnitPrice: undefined,", "")
      .replace("IsDiscounted: false,", "")
      .replaceAll("&#039;", "'")
  );

  const first = product.image.indexOf("_");
  const second = product.image.indexOf("_", first + 1);
  const imageId = product.image.slice(first + 1, second);

  const url = product.image;
  const images = [];

  for (let i of ["a", "b", "c", "d", "e", "f"]) {
    const copy = url;
    images.push(copy.replace("_a?", `_${i}?`) + "&w=750&h=531&v=1&fmt=auto");
  }

  product.images = images;
  product.image = `https://i8.amplience.net/t/jpl/jd_product_list?plu=jd_${imageId}_plc&qlt=92&w=363&h=463&v=1&fmt=auto`;

  console.log(product);
}

extract();
