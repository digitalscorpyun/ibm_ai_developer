// #script_discipline: stock_checker.js - Tracks product stock levels.
// For IBM AI Developer Certificate - Enhancing JavaScript Skills Lab - Exercise 4
// Executed from WSL-native path: ~/projects_2025/ibm_ai_developer/labs/js_stock_checker_ex4/

const products = [
    { product: "Anacostia Codex Scroll", stock: 15 },
    { product: "Tyrian Purple Ink Vial", stock: 0 },
    { product: "Scorpyun Stylus Prime", stock: 5 },
    { product: "Obsidian Data Crystal", stock: 0 },
    { product: "Lion's Mane Tassel", stock: 22 },
    { product: "Griot's Portable Lectern", stock: -1 } // Example of potentially invalid stock
];

/**
 * Iterates through an array of product objects and logs their stock status.
 * @param {object[]} productArray An array of product objects, each with 'product' (string) and 'stock' (number).
 */
function checkStockLevels(productArray) {
    console.log("--- ANACOSTIA Inventory Stock Check Ritual ---");

    productArray.forEach(currentProduct => { // Using forEach for variety
        let stockStatus = "";
        let statusGlyph = "";
        let stockDisplay = "";

        if (typeof currentProduct.stock === 'number' && currentProduct.stock >= 0) { // Stock shouldn't be negative
            if (currentProduct.stock > 0) {
                stockStatus = "In Stock";
                statusGlyph = "🟢";
                stockDisplay = `(${currentProduct.stock} units)`;
            } else { // stock is 0
                stockStatus = "Out of Stock";
                statusGlyph = "🔴";
            }
        } else {
            stockStatus = "Stock Unknown/Invalid"; // Handles non-numbers or negative stock
            statusGlyph = "❓";
            if (typeof currentProduct.stock === 'number') {
                stockDisplay = `(Value: ${currentProduct.stock})`;
            }
        }
        
        console.log(
            `Product: ${currentProduct.product.padEnd(30)} | Status: ${statusGlyph} ${stockStatus.padEnd(20)} ${stockDisplay}`
        );
    });
    console.log("--- Stock Check Ritual Complete ---");
}

// --- Execute the Stock Check Ritual ---
checkStockLevels(products);