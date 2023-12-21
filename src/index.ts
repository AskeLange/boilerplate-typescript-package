export default function (...args: number[]) {
	console.log(args.reduce((a, b) => a + b, 0));
}
