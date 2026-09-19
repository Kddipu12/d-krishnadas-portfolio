import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        print("Navigating to local preview server...")
        await page.goto("http://localhost:4173")

        # Give it some time to render the canvas
        await asyncio.sleep(3)

        print("Taking screenshot of Hero section...")
        await page.screenshot(path="/home/jules/verification/interactive_hero.png")

        # Simulate mouse movement over the canvas
        print("Simulating mouse movement...")
        await page.mouse.move(100, 100)
        await asyncio.sleep(0.1)
        await page.mouse.move(200, 200)
        await asyncio.sleep(0.1)
        await page.mouse.move(300, 300)
        await asyncio.sleep(0.1)
        await page.mouse.move(500, 300)

        await asyncio.sleep(1)
        print("Taking screenshot after mouse interaction...")
        await page.screenshot(path="/home/jules/verification/interactive_hero_hover.png")

        # Scroll down to Projects section
        await page.evaluate("window.scrollTo(0, document.getElementById('projects').offsetTop)")
        await asyncio.sleep(2)
        print("Taking screenshot of Projects section...")
        await page.screenshot(path="/home/jules/verification/interactive_projects.png")

        await browser.close()
        print("Done!")

if __name__ == "__main__":
    asyncio.run(main())
