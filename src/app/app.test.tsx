import '@testing-library/jest-dom';
import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from '@app/index';
import userEvent from '@testing-library/user-event';

describe('App tests', () => {
  test('should render default App component', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Global navigation' })).toBeVisible();
  });

  it('should render a nav-toggle button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Global navigation' })).toBeVisible();
  });

  /** I'm fairly sure that this test not going to work properly no matter what we do since JSDOM doesn't actually
   * draw anything. We could potentially make something work, likely using a different test environment, but
   * using Cypress for this kind of test would be more efficient.I
   */
  it.skip('should hide the sidebar on smaller viewports', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 600 });
    render(<App />);
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(screen.queryByRole('link', { name: 'Dashboard' })).not.toBeInTheDocument();
  });

  it('should expand the sidebar on larger viewports', () => {
    render(<App />);
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    expect(screen.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  });

  it('should hide the sidebar when clicking the nav-toggle button', async () => {
    const user = userEvent.setup();
    render(<App />);
    act(() => {
      window.dispatchEvent(new Event('resize'));
    });
    const button = screen.getByRole('button', { name: 'Global navigation' });
    expect(screen.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await act(async () => {
      await user.click(button);
    });
    expect(screen.queryByRole('link', { name: 'Dashboard' })).not.toBeInTheDocument();
  });
});
