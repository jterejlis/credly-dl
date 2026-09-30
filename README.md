# credly-dl 🎖️

A zero-dependency CLI tool to quickly fetch verified Credly badge metadata as structured JSON.

## Quick Run

No installation required, run directly via `npx`:

```bash
# Print formatted JSON to stdout
npx credly-dl <username>

# Save badges directly to a file
npx credly-dl <username> > badges.json

# Pipe into jq to inspect specific certifications
npx credly-dl <username> | jq '.data[].badge_template.name'
```

## Related Projects

* **[Badge CV Builder](https://github.com/jterejlis/badge-cv-builder)** – A client-side web application that renders these badges directly onto a print-ready A4 resume.

## License

MIT
