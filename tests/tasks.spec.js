const { test, expect } = require('@playwright/test');

test.describe('Task Management', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/tasks');
    });

    test('should display tasks page correctly', async ({ page }) => {
        // Check page title and header
        await expect(page).toHaveTitle(/Tasks/);
        await expect(page.locator('h1')).toContainText('Tasks');
        
        // Check create task button exists
        await expect(page.locator('#createTaskBtn')).toBeVisible();
        
        // Check task cards are displayed
        await expect(page.locator('.task-card')).toHaveCount(6); // Based on our mock data
    });

    test('should show task details when clicking view button', async ({ page }) => {
        // Click on the first task's view button
        await page.locator('.view-task').first().click();
        
        // Check that task details modal opens
        await expect(page.locator('#taskDetailsModal')).toHaveClass(/active/);
        await expect(page.locator('#taskDetailsContent')).toBeVisible();
    });

    test('should open create task modal', async ({ page }) => {
        // Click create task button
        await page.locator('#createTaskBtn').click();
        
        // Check modal opens
        await expect(page.locator('#taskModal')).toHaveClass(/active/);
        await expect(page.locator('#taskTitle')).toBeVisible();
        await expect(page.locator('#taskDueDate')).toBeVisible();
        await expect(page.locator('#taskPriority')).toBeVisible();
    });

    test('should close modal when clicking cancel', async ({ page }) => {
        // Open modal
        await page.locator('#createTaskBtn').click();
        await expect(page.locator('#taskModal')).toHaveClass(/active/);
        
        // Click cancel
        await page.locator('#cancelTask').click();
        
        // Check modal closes
        await expect(page.locator('#taskModal')).not.toHaveClass(/active/);
    });

    test('should display AI badges for AI-generated tasks', async ({ page }) => {
        // Check for AI badges
        const aiBadges = page.locator('.ai-badge');
        await expect(aiBadges).toHaveCount(3); // Based on our mock data
        
        // Check AI badge content
        await expect(aiBadges.first()).toContainText('AI');
    });

    test('should show priority badges correctly', async ({ page }) => {
        // Check for priority badges
        const priorityBadges = page.locator('.priority-badge');
        await expect(priorityBadges).toHaveCount(6);
        
        // Check different priority types exist
        await expect(page.locator('.priority-high')).toBeVisible();
        await expect(page.locator('.priority-medium')).toBeVisible();
        await expect(page.locator('.priority-low')).toBeVisible();
    });

    test('should show company links', async ({ page }) => {
        // Check for company links
        const companyLinks = page.locator('.company-link');
        await expect(companyLinks.first()).toBeVisible();
        
        // Check company link points to correct URL
        const firstCompanyLink = companyLinks.first();
        await expect(firstCompanyLink).toHaveAttribute('href', /\/accounts\/.+/);
    });

    test('should display task assignees', async ({ page }) => {
        // Check for assignee avatars
        const assigneeAvatars = page.locator('.assignee-avatar');
        await expect(assigneeAvatars.first()).toBeVisible();
    });

    test('should show task tags', async ({ page }) => {
        // Check for task tags
        const taskTags = page.locator('.task-tag');
        await expect(taskTags.first()).toBeVisible();
    });

    test('should display task count in footer', async ({ page }) => {
        // Check task count display
        await expect(page.locator('.pagination-info')).toContainText('6 tasks');
        await expect(page.locator('.pagination-info')).toContainText('1 completed');
    });

    test('should show AI reprioritize button', async ({ page }) => {
        // Check AI reprioritize button
        await expect(page.locator('.ai-reprioritize')).toBeVisible();
        await expect(page.locator('.ai-reprioritize')).toContainText('AI Reprioritize');
    });

    test('should complete a task when clicking complete button', async ({ page }) => {
        // Get the first incomplete task
        const incompleteTask = page.locator('.task-card').not('.status-completed').first();
        const completeButton = incompleteTask.locator('.complete-task');
        
        // Click complete button
        await completeButton.click();
        
        // Check that task gets completed styling
        await expect(incompleteTask).toHaveClass(/status-completed/);
    });

    test('should decline AI tasks', async ({ page }) => {
        // Find an AI task with decline button
        const aiTask = page.locator('.task-card .ai-badge').first().locator('..').locator('..');
        const declineButton = aiTask.locator('.decline-task');
        
        if (await declineButton.isVisible()) {
            // Count tasks before declining
            const initialTaskCount = await page.locator('.task-card').count();
            
            // Click decline button
            await declineButton.click();
            
            // Wait for animation and check task is removed
            await page.waitForTimeout(500);
            const finalTaskCount = await page.locator('.task-card').count();
            expect(finalTaskCount).toBe(initialTaskCount - 1);
        }
    });

    test('should handle form validation for task creation', async ({ page }) => {
        // Open create task modal
        await page.locator('#createTaskBtn').click();
        
        // Try to submit without required fields
        await page.locator('button[type="submit"]').click();
        
        // Check that form validation prevents submission
        // (The browser's built-in validation will handle this)
        await expect(page.locator('#taskModal')).toHaveClass(/active/);
    });

    test('should show company autocomplete suggestions', async ({ page }) => {
        // Open create task modal
        await page.locator('#createTaskBtn').click();
        
        // Type in company field
        await page.locator('#taskCompany').fill('Bil');
        
        // Check for autocomplete suggestions
        await expect(page.locator('#companySuggestions')).toHaveClass(/active/);
        await expect(page.locator('.suggestion-item')).toContainText('Bilkent');
    });
});