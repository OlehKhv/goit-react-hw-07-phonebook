export const handlePending = state => {
    state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

export const handleFulfilled = state => {
    state.isLoading = false;
    state.error = null;
};

export const handleFetchAllFulfilled = (state, { payload }) => {
    state.items = payload;
};

export const handleDeleteFulfilled = (state, { payload }) => {
    state.items.splice(
        state.items.findIndex(({ id }) => id === payload),
        1
    );
};

export const handleAddFulfilled = (state, { payload }) => {
    state.items.unshift(payload);
};
