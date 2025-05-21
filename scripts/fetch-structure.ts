import fs from 'fs';
import path from 'path';

async function run() {
  const id = "92048f85-3ab5-4073-b8bc-6009c7361acc";
  const endpoint = process.env.TEMPLATE_API || 'https://replicode.co/api/templates/';

  if (!id) {
    console.error('STRUCTURE_ID is missing');
    process.exit(1);
  }

  const res = await fetch(`${endpoint}${id}`);
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