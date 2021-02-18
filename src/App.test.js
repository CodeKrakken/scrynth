import { render, screen } from '@testing-library/react';
import App from './App';
import Keyboard from './components/Keyboard'

describe('app', () => {

  beforeEach(function() {
    render(<App />)
  })

  it('renders the title', () => {
    expect(screen.getByText('scrynth')).toBeInTheDocument()
  })

  it('renders the keyboard component', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})

// remember, you can always use screen.debug()