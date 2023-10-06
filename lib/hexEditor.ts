export const hexShade = (col: string, amt: number) => {
  col = col.replace(/^#/, "");
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g) || ["FF", "FF", "FF"];

  r = Math.max(Math.min(255, parseInt(r, 16) + amt), 0).toString(16);
  g = Math.max(Math.min(255, parseInt(g, 16) + amt), 0).toString(16);
  b = Math.max(Math.min(255, parseInt(b, 16) + amt), 0).toString(16);

  const rr = (r.length < 2 ? "0" : "") + r;
  const gg = (g.length < 2 ? "0" : "") + g;
  const bb = (b.length < 2 ? "0" : "") + b;

  return `#${rr}${gg}${bb}`;
};
