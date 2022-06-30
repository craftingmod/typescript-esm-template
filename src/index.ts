import fs from "node:fs/promises"

// ESM example
console.log(`List files: ${await fs.readdir(".")}`)