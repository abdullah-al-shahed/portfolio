import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Generates the placeholder resume PDF placed in public/resume.
 * Run with: node scripts/generate-resume.mjs
 *
 * Replace the generated file with a final, designed resume whenever possible.
 */

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = join(scriptDirectory, "..", "public", "resume");
const outputFile = join(
  outputDirectory,
  "MD-Abdullah-Al-Shahed-Resume.pdf",
);

mkdirSync(outputDirectory, { recursive: true });

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 52;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const commands = [];
let cursor = 58;

const colors = {
  ink: [0.08, 0.09, 0.11],
  body: [0.22, 0.24, 0.27],
  muted: [0.38, 0.4, 0.44],
  line: [0.72, 0.74, 0.77],
};

function escapePdfText(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function setFill([r, g, b]) {
  commands.push(`${r} ${g} ${b} rg`);
}

function drawText(value, x, size, font = "F1", color = colors.body) {
  const y = PAGE_HEIGHT - cursor;
  setFill(color);
  commands.push(
    `BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escapePdfText(value)}) Tj ET`,
  );
}

function drawRule(yFromTop, color = colors.line, width = 0.6) {
  const y = PAGE_HEIGHT - yFromTop;
  commands.push(
    `${width} w ${color[0]} ${color[1]} ${color[2]} RG ${MARGIN} ${y} m ${PAGE_WIDTH - MARGIN} ${y} l S`,
  );
}

function wrapText(value, maxWidth, size) {
  const maxCharacters = Math.max(24, Math.floor(maxWidth / (size * 0.5)));
  const words = value.split(/\s+/);
  const lines = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxCharacters && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function addSection(title) {
  cursor += 18;
  drawText(title, MARGIN, 9.5, "F2", colors.ink);
  cursor += 5;
  drawRule(cursor, colors.line, 0.7);
  cursor += 15;
}

function addParagraph(value, { size = 9.3, leading = 13, color = colors.body } = {}) {
  for (const line of wrapText(value, CONTENT_WIDTH, size)) {
    drawText(line, MARGIN, size, "F1", color);
    cursor += leading;
  }
}

function addBullet(value, { size = 9.2, leading = 12.5 } = {}) {
  const lines = wrapText(value, CONTENT_WIDTH - 14, size);

  lines.forEach((line, index) => {
    if (index === 0) {
      drawText(`- ${line}`, MARGIN, size, "F1", colors.body);
    } else {
      drawText(line, MARGIN + 10, size, "F1", colors.body);
    }
    cursor += leading;
  });
}

// Header
drawText("MD. ABDULLAH AL SHAHED", MARGIN, 21, "F2", colors.ink);
cursor += 23;
drawText("Junior Full Stack Developer", MARGIN, 10.5, "F1", colors.muted);
cursor += 16;
drawText(
  "alshahed6951@gmail.com  |  +880 1885-306951",
  MARGIN,
  8.8,
  "F1",
  colors.body,
);
cursor += 11.5;
drawText(
  "github.com/abdullah-al-shahed  |  linkedin.com/in/md-abdullah-al-shahed",
  MARGIN,
  8.8,
  "F1",
  colors.body,
);
cursor += 7;
drawRule(cursor, colors.line, 0.9);

// Profile
addSection("PROFILE");
addParagraph(
  "Junior Full Stack Developer focused on the JavaScript ecosystem. Builds responsive interfaces with React, Next.js, and Tailwind CSS, and supports them with Node.js, Express, MongoDB, and REST APIs. Values clear architecture, accessible interfaces, and maintainable code.",
);

// Skills
addSection("TECHNICAL SKILLS");
addParagraph("Frontend: JavaScript (ES6+), React.js, Next.js, Tailwind CSS, Shadcn UI");
addParagraph("Backend: Node.js, Express.js, REST API, Better Auth");
addParagraph("Database and tools: MongoDB, Git, GitHub");

// Featured project
addSection("FEATURED PROJECT");
drawText(
  "BookNook - Online Library Management System",
  MARGIN,
  10,
  "F2",
  colors.ink,
);
cursor += 13;
drawText(
  "Live: https://booknook-client-amber.vercel.app/",
  MARGIN,
  8.6,
  "F1",
  colors.muted,
);
cursor += 11;
drawText(
  "Client: https://github.com/abdullah-al-shahed/booknook-client.git",
  MARGIN,
  8.6,
  "F1",
  colors.muted,
);
cursor += 11.5;
addParagraph(
  "Stack: Next.js, React, Tailwind CSS, Shadcn UI, Node.js, Express.js, MongoDB, Better Auth.",
  { size: 8.9, leading: 12, color: colors.muted },
);
addBullet("Dynamic book catalog with sorting and filtering.");
addBullet("Secure registration, login, and session management.");
addBullet("Protected CRUD operations for book listings.");
addBullet("Borrowing and returning with automatic inventory updates.");
addBullet("Borrowing history for every reader.");

// Education
addSection("EDUCATION");
drawText(
  "Diploma in Engineering (Power Technology)",
  MARGIN,
  10,
  "F2",
  colors.ink,
);
cursor += 13;
drawText("Chattogram Polytechnic Institute", MARGIN, 9.2, "F1", colors.body);
cursor += 12;
drawText(
  "Passing year: 2025   |   CGPA: 3.12 / 4.00",
  MARGIN,
  8.8,
  "F1",
  colors.muted,
);

// Experience placeholder
addSection("PROFESSIONAL EXPERIENCE");
drawText(
  "[Add role title] - [Add company name]",
  MARGIN,
  9.6,
  "F2",
  colors.ink,
);
cursor += 12.5;
drawText(
  "[Start date] - [End date]   |   [Add location or Remote]",
  MARGIN,
  8.7,
  "F1",
  colors.muted,
);
cursor += 12.5;
addBullet("[Add a key responsibility, contribution, or measurable achievement]");
addBullet("[Add another responsibility or achievement]");

// Footer
const footerY = PAGE_HEIGHT - 46;
const note =
  "Draft generated from the portfolio information. Add professional experience and replace this file before sharing.";
const noteLines = wrapText(note, CONTENT_WIDTH, 7.2);
setFill(colors.line);
commands.push(
  `0.5 w ${colors.line[0]} ${colors.line[1]} ${colors.line[2]} RG ${MARGIN} ${footerY + 12} m ${PAGE_WIDTH - MARGIN} ${footerY + 12} l S`,
);
noteLines.forEach((line, index) => {
  const y = footerY - index * 9;
  setFill(colors.muted);
  commands.push(
    `BT /F1 7.2 Tf 1 0 0 1 ${MARGIN} ${y} Tm (${escapePdfText(line)}) Tj ET`,
  );
});

const content = commands.join("\n");

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`,
  `<< /Title (MD. Abdullah Al Shahed - Junior Full Stack Developer Resume) /Author (MD. Abdullah Al Shahed) /Subject (Resume) /Creator (Portfolio resume generator) /Producer (Portfolio resume generator) >>`,
];

let pdf = "%PDF-1.4\n";
const offsets = new Array(objects.length + 1).fill(0);

objects.forEach((object, index) => {
  offsets[index + 1] = Buffer.byteLength(pdf, "latin1");
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;

for (let index = 1; index <= objects.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
}

pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R /Info 7 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

writeFileSync(outputFile, Buffer.from(pdf, "latin1"));
console.log(`Resume written to ${outputFile}`);
