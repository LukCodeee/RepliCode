import fs from 'fs';
import path from 'path';

async function run() {
  const id = process.env.STRUCTURE_ID;
  const endpoint = process.env.STRUCTURE_API || 'https://yourdomain.com/api/structure';

  if (!id) {
    console.error('STRUCTURE_ID is missing');
    process.exit(1);
  }

  const res = await fetch(`${endpoint}?id=${id}`);
  if (!res.ok) {
    console.error(`Failed to fetch structure: ${res.status}`);
    process.exit(1);
  }

  const json = await res.json();

  const outputPath = path.join(process.cwd(), 'data', 'data.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(json, null, 2));

  console.log('✅ Page structure saved to data/data.json');
}

run();