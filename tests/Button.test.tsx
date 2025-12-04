import { render, screen } from '@testing-library/react';
import { Button } from '../src/base/Button';
test('renders',()=>{render(<Button>OK</Button>);screen.getByText('OK');});