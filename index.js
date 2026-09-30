#!/usr/bin/env node

const username = process.argv[2];

if (!username || username === "--help" || username === "-h") {
  process.stderr.write("Usage: npx credly-dl <username>\nExample: npx credly-dl jakub-terejlis > badges.json\n");
  process.exit(username ? 0 : 1);
}

const workerUrl = `https://cv-builder.jterejlis.workers.dev/?username=${encodeURIComponent(username)}`;

try {
  const res = await fetch(workerUrl);

  if (!res.ok) {
    process.stderr.write(`Error: Upstream returned HTTP ${res.status}\n`);
    process.exit(1);
  }

  const data = await res.json();
  const badges = Array.isArray(data) ? data : (data.data || []);
  process.stdout.write(JSON.stringify(badges, null, 2) + "\n");
  
} catch (err) {
  process.stderr.write(`Network error: ${err.message}\n`);
  process.exit(1);
}
