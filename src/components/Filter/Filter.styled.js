import { styled } from 'styled-components';

export const FilterField = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '40px',
}));

export const LabelSearchInput = styled('label')(() => ({
    color: '#171819',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '8px',
}));
