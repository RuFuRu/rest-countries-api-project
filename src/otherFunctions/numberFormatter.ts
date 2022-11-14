export default function numberFormatter(num: number): string {
    return new Intl.NumberFormat().format(num);
}