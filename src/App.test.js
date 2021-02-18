import { render, screen } from '@testing-library/react';
import App from './App';

describe('app', () => {
  it('renders app component', () => {
    render(<App />)
    expect(screen.getByText('scrynth')).toBeInTheDocument()
  })
})

// remember, you can always use screen.debug()