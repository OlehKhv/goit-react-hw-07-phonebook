import { styled } from 'styled-components';

export const NotificationText = styled('h4')(() => ({
    color: '#424D55',
    textAlign: 'center',
    opacity: '0.6',
}));

export const NotFoundNotificationText = styled(NotificationText)(() => ({
    opacity: '1',
}));

export const ErrorNotificationText = styled(NotFoundNotificationText)(() => ({
    color: '#D61717',
}));
