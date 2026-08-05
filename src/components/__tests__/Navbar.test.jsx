import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark');
  });

  it('toggles the dark class on <html> when the theme button is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    const themeButton = screen.getByRole('button', { name: /cambiar tema/i });
    await user.click(themeButton);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    await user.click(themeButton);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('opens the mobile menu and closes it again', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    await user.click(screen.getByRole('button', { name: /^menú$/i }));
    const closeButton = screen.getByRole('button', { name: /cerrar menú/i });
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);
    expect(screen.queryByRole('button', { name: /cerrar menú/i })).not.toBeInTheDocument();
  });
});
