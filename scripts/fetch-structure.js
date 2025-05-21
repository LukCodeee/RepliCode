const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Loaded TEMPLATE_ID:', process.env.TEMPLATE_ID);
  const id = process.env.TEMPLATE_ID || '92048f85-3ab5-4073-b8bc-6009c7361acc';
  const endpoint = process.env.TEMPLATE_API || 'https://replicode.co/api/templates/';

  const json = await fetchJson(`${endpoint}${id}`);

  const outputPath = path.join(process.cwd(), 'data.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(json.template.content, null, 2));

  console.log(outputPath, 'outputPath');

  console.log('✅ Page structure saved to data/data.json');
}

run();