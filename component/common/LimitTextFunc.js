export default function LimitText(text, count) {
 return text.slice(0, count) + (text.length > count ? "..." : "");
}