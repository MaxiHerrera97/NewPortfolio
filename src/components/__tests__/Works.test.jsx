import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Works from '../Works';

describe('Works', () => {
  it('lists only personal projects, not the ones built under employment at Zafra S.A.', () => {
    render(<Works />);

    expect(screen.getByText('Aplicacion SaaS para Barberias - BarberFlow')).toBeInTheDocument();
    expect(screen.getByText('Aplicación SaaS para Negocios - Negocio Pro')).toBeInTheDocument();

    expect(screen.queryByText('Planificador Semanal')).not.toBeInTheDocument();
    expect(screen.queryByText('Gestor de Servicios')).not.toBeInTheDocument();
    expect(screen.queryByText('Chequeos de Máquinas')).not.toBeInTheDocument();
    expect(screen.queryByText('Pagina Web - Usados Zafra')).not.toBeInTheDocument();
    expect(screen.queryByText('Proximamente...')).not.toBeInTheDocument();
  });

  it('opens the details modal and shows the testing stack for a project', async () => {
    const user = userEvent.setup();
    render(<Works />);

    const [firstDetailsButton] = screen.getAllByRole('button', { name: /ver detalles/i });
    await user.click(firstDetailsButton);

    expect(
      screen.getByRole('heading', { level: 3, name: 'Aplicacion SaaS para Barberias - BarberFlow' })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/jest \+ react testing library/i).length).toBeGreaterThan(0);
  });
});
