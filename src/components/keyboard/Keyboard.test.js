import { render, screen } from '@testing-library/react'
import Keyboard from './Keyboard'

describe('keyboard', function() {
  beforeEach(function() {
    render(<Keyboard />)
  })

  it('renders a key', function() {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('has C4 key', function() {
    expect(screen.getByText('C4')).toBeInTheDocument()
  })
})