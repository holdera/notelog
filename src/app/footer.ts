export class Footer {
	footertext: string;
	constructor() {
	console.log(`This is the footer constructor`);
	this.footertext = `Demo for webpack set up`;
	}
	getFooterText(): string {
	return this.footertext;
	}
}