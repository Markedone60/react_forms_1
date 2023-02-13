export default function HexConverter(hex) {
  const color = /^#[A-Fa-f0-9]{6}$/.test(hex);

    if(!color) {
      return null;
    } else {
      const rgb = {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
      }
      return rgb;
    }
}