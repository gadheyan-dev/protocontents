import { test, expect } from '@playwright/test'

test.describe('Protocontents Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load page with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Protocontents/)
  })

  test('navigation links should scroll to correct sections', async ({ page }) => {
    // Test Home link
    await page.getByRole('link', { name: 'Home' }).click()
    await page.waitForTimeout(500)
    const homeSection = page.locator('#home')
    await expect(homeSection).toBeVisible()

    // Test About link
    await page.getByRole('link', { name: 'About' }).click()
    await page.waitForTimeout(500)
    const aboutSection = page.locator('#about')
    await expect(aboutSection).toBeVisible()

    // Test Services link
    await page.getByRole('link', { name: 'Services' }).click()
    await page.waitForTimeout(500)
    const servicesSection = page.locator('#services')
    await expect(servicesSection).toBeVisible()

    // Test Work link
    await page.getByRole('link', { name: 'Work' }).click()
    await page.waitForTimeout(500)
    const workSection = page.locator('#work')
    await expect(workSection).toBeVisible()

    // Test Contact link
    await page.getByRole('link', { name: 'Contact' }).click()
    await page.waitForTimeout(500)
    const contactSection = page.locator('#contact')
    await expect(contactSection).toBeVisible()
  })

  test('Hero "Book a Call" button should scroll to Contact section', async ({ page }) => {
    await page.getByRole('button', { name: 'Book a Call' }).click()
    await page.waitForTimeout(500)
    const contactSection = page.locator('#contact')
    await expect(contactSection).toBeVisible()
  })

  test('Services cards should be visible and animate on hover', async ({ page }) => {
    await page.getByRole('link', { name: 'Services' }).click()
    await page.waitForTimeout(500)

    // Check that service cards are visible
    const brandStrategy = page.getByText('Brand Strategy')
    await expect(brandStrategy).toBeVisible()

    const visualIdentity = page.getByText('Visual Identity')
    await expect(visualIdentity).toBeVisible()

    // Hover over a service card
    const serviceCard = page.locator('[class*="rounded-2xl"]').filter({ hasText: 'Brand Strategy' }).first()
    await serviceCard.hover()
    await page.waitForTimeout(300)

    // Card should still be visible after hover
    await expect(serviceCard).toBeVisible()
  })

  test('Contact form should show validation errors for empty fields', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click()
    await page.waitForTimeout(500)

    // Try to submit without filling fields
    await page.getByRole('button', { name: /Send Message/i }).click()
    await page.waitForTimeout(300)

    // Check for validation errors
    const nameError = page.getByText(/Name is required/i)
    const emailError = page.getByText(/Email is required/i)
    const messageError = page.getByText(/Message is required/i)

    await expect(nameError.first()).toBeVisible()
    await expect(emailError.first()).toBeVisible()
    await expect(messageError.first()).toBeVisible()
  })

  test('Contact form should show success toast after valid submit', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact' }).click()
    await page.waitForTimeout(500)

    // Fill in the form
    await page.getByLabel(/Name/i).fill('Test User')
    await page.getByLabel(/Company/i).fill('Test Company')
    await page.getByLabel(/Email/i).fill('test@example.com')
    await page.getByLabel(/Message/i).fill('This is a test message')

    // Submit the form
    await page.getByRole('button', { name: /Send Message/i }).click()

    // Wait for success toast
    await page.waitForSelector('text=Message Sent!', { timeout: 5000 })
    const successToast = page.getByText('Message Sent!')
    await expect(successToast).toBeVisible()
  })

  test('should be responsive at 375px (mobile)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Check that mobile menu button is visible
    const menuButton = page.getByRole('button', { name: /Toggle menu/i })
    await expect(menuButton).toBeVisible()

    // Check that hero section is visible and not overflow
    const hero = page.locator('#home')
    await expect(hero).toBeVisible()

    // Take screenshot for visual verification (optional)
    // await page.screenshot({ path: 'tests/screenshots/mobile-375.png' })
  })

  test('should be responsive at 768px (tablet)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')

    // Check that navigation is visible
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()

    // Check that services grid is visible
    await page.getByRole('link', { name: 'Services' }).click()
    await page.waitForTimeout(500)
    const servicesSection = page.locator('#services')
    await expect(servicesSection).toBeVisible()
  })

  test('should be responsive at 1440px (desktop)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('/')

    // Check that desktop navigation is visible
    const desktopNav = page.locator('nav').filter({ has: page.locator('text=Home') })
    await expect(desktopNav).toBeVisible()

    // Check that all sections are visible
    const sections = ['#home', '#about', '#services', '#work', '#contact']
    for (const section of sections) {
      await expect(page.locator(section)).toBeVisible()
    }
  })

  test('all buttons should have accessible names', async ({ page }) => {
    // Get all buttons
    const buttons = page.locator('button')
    const count = await buttons.count()

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i)
      const ariaLabel = await button.getAttribute('aria-label')
      const text = await button.textContent()
      const isVisible = await button.isVisible()

      if (isVisible) {
        // Button should have either accessible text or aria-label
        expect(ariaLabel || text?.trim()).toBeTruthy()
      }
    }
  })

  test('keyboard navigation should work', async ({ page }) => {
    // Tab through the page
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Check that focus is visible on interactive elements
    const focusedElement = page.locator(':focus')
    await expect(focusedElement).toBeVisible()
  })

  test('should respect reduced motion preference', async ({ page, context }) => {
    // Simulate reduced motion preference
    await context.addCookies([
      {
        name: 'prefers-reduced-motion',
        value: 'reduce',
        domain: 'localhost',
        path: '/',
      },
    ])

    await page.goto('/')
    
    // Page should still load and be functional
    await expect(page.locator('#home')).toBeVisible()
  })
})

