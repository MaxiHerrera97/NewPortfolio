import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact', () => {
  it('renders every contact channel pointing at its correct destination', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/maximiliano-gabriel-herrera-44260524b/'
    );
    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute(
      'href',
      'mailto:maximilianogabriel0511@gmail.com'
    );
    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute(
      'href',
      'https://wa.me/5493813686226'
    );

    const cvLink = screen.getByRole('link', { name: /descargar cv/i });
    expect(cvLink).toHaveAttribute('href', '/CV-HerreraMaximiliano.pdf');
    expect(cvLink).toHaveAttribute('download');
  });
});
