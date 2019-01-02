#!/usr/bin/env node
const puppeteer = require("puppeteer");
const config = require("./config.json");

(async () => {
	setTimeout(() => {
		console.log("Timeout of 60 seconds reached. Killing...");
		browser.close();
		setTimeout(() => {
			process.exit(1);
		}, 5000)
	}, 60000)

	console.log("Launching browser");
	const browser = await puppeteer.launch();
	console.log("Creating page");
	const page = await browser.newPage();
	console.log("Setting viewport");
	page.setViewport({
		width: 1200,
		height: 1024
	});
	console.log("Waiting for page to load: " + config.url);
	await page.goto(config.url, {
		waitUntil: "networkidle2"
	});
	console.log("Clicking login");
	await page.click("#logout_span", {
		delay: 200
	})
	console.log("Clicking username 3 times");
	await page.click("#username", {
		delay: 50,
		clickCount: 3
	})
	console.log("Pressing backspace");
	await page.keyboard.press("Backspace");
	console.log("Typing username");
	await page.type("#username",config.username);
	console.log("Typing password");
	await page.type("#password",config.password);
	console.log("Pressing Enter");
	await page.keyboard.press("Enter");
	console.log("Waiting for: " + config.url + config.loginRequest);
	await page.waitForResponse(config.url + config.loginRequest);
	console.log("Loading reboot page: " + config.url + config.rebootUrl)
	await page.goto((config.url + config.rebootUrl), {
		waitUntil: "networkidle2"
	});
	console.log("Clicking reboot");
	await page.click("#button_reboot");
	console.log("Clicking confirm");
	await page.click("#pop_confirm");

	setTimeout(async () => {
		console.log("Closing browser");
		await browser.close()
	}, 5000);

})();