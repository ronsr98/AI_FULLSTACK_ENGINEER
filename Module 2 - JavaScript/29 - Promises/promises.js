// Promises - exercises 1-3.

// ---------- Exercise 1: lucky number ----------
function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 0) reject(new Error("Invalid number"));
      else if (num % 7 === 0) resolve("Lucky!");
      else resolve("Not lucky");
    }, 800);
  });
}

// ---------- Exercise 2: process files concurrently ----------
function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);
    setTimeout(() => {
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        console.log(`✓ Completed ${filename}`);
        resolve({
          filename,
          size: Math.floor(Math.random() * 1000) + 100,
          processedAt: new Date().toLocaleTimeString(),
        });
      }
    }, processingTime);
  });
}

const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];

function processAllFiles() {
  const start = Date.now();
  const promises = files.map((f) => processFile(f.name, f.time));
  return Promise.all(promises)
    .then((results) => {
      console.log(`All files done in ${Date.now() - start}ms`);
      console.log(results);
    })
    .catch((err) => console.log("A file failed:", err.message))
    // Bonus: allSettled shows every result even if some fail
    .then(() => Promise.allSettled(files.map((f) => processFile(f.name, f.time))))
    .then((settled) => console.log("allSettled statuses:", settled.map((s) => s.status)));
}

// ---------- Exercise 3: promise-based checkout ----------
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 },
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const outOfStock = items.find((item) => !inventory[item] || inventory[item].stock <= 0);
      if (outOfStock) reject(new Error(`Out of stock: ${outOfStock}`));
      else resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const subtotal = items.reduce((sum, item) => sum + inventory[item].price, 0);
      const tax = subtotal * 0.08;
      resolve({ subtotal, tax, total: subtotal + tax });
    }, 200);
  });
}

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve({ transactionId: "TX" + Date.now(), amount, status: "success" });
      } else {
        reject(new Error("Payment failed"));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  return new Promise((resolve) => {
    setTimeout(() => {
      items.forEach((item) => inventory[item].stock--);
      resolve({ updated: true });
    }, 300);
  });
}

function checkout(itemNames) {
  return checkInventory(itemNames)
    .then((items) => calculateTotal(items))
    .then((totals) => processPayment(totals.total).then((payment) => ({ totals, payment })))
    .then(({ totals, payment }) =>
      updateInventory(itemNames).then(() => ({ items: itemNames, ...totals, payment }))
    );
}

// ---------- run them ----------
(async () => {
  console.log("--- Exercise 1 ---");
  console.log(await checkLuckyNumber(14)); // Lucky!
  console.log(await checkLuckyNumber(10)); // Not lucky
  try { await checkLuckyNumber(-5); } catch (e) { console.log(e.message); } // Invalid number

  console.log("\n--- Exercise 2 ---");
  await processAllFiles();

  console.log("\n--- Exercise 3 ---");
  await checkout(["laptop", "mouse"])
    .then((r) => console.log("Order success: total", r.total.toFixed(2)))
    .catch((e) => console.log("Order failed:", e.message));
  await checkout(["laptop", "keyboard"])
    .then((r) => console.log("Order success:", r))
    .catch((e) => console.log("Order failed:", e.message)); // out of stock
})();
