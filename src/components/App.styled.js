import { styled } from 'styled-components';

export const Main = styled('main')(() => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 40,
    color: '#010101',
}));

export const MainTitle = styled('h1')(() => ({
    color: '#171819',
    marginBottom: '20px',
    textAlign: 'center',
}));
