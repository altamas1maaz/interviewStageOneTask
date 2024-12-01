function updatePrice(units) {
  const priceMap = {
    1: "$10.00 USD",
    2: "$18.00 USD",
    3: "$24.00 USD"
  };

  document.getElementById("total-price").textContent = priceMap[units];
}
