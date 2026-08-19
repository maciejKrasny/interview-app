import { createSlice } from "@reduxjs/toolkit";
import { ApolloError } from "@apollo/client";
import { createAppAsyncThunk } from "../hooks";
import { ADD_QUESTION, ADD_QUESTION_PARAMS } from "../../api/mutations/addQuestion";
import { apolloClient } from "#//App";

export interface InitialState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    currentRequestId?: string;
}

const initialState: InitialState = {
    loading: 'idle'
}

function isUnauthorized(error: unknown): boolean {
    if (!(error instanceof ApolloError)) {
        return false;
    }

    return error.graphQLErrors.some((graphQLError) => {
        const extensions = graphQLError.extensions ?? {};
        const originalError = extensions.originalError as
            | { statusCode?: number }
            | undefined;

        return (
            extensions.code === 'UNAUTHENTICATED' ||
            originalError?.statusCode === 401
        );
    });
}

// Native window.prompt can't mask input, so render a tiny modal with a
// password field and resolve once the user confirms or cancels.
function promptForPassword(): Promise<string | undefined> {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.style.cssText =
            'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999;';

        const form = document.createElement('form');
        form.style.cssText =
            'background:#fff;padding:24px;border-radius:8px;display:flex;flex-direction:column;gap:12px;min-width:260px;';

        const label = document.createElement('label');
        label.textContent = 'Enter password';

        const input = document.createElement('input');
        input.type = 'password';
        input.autofocus = true;
        input.style.cssText = 'padding:8px;font-size:14px;';

        const buttons = document.createElement('div');
        buttons.style.cssText = 'display:flex;gap:8px;justify-content:flex-end;';

        const cancel = document.createElement('button');
        cancel.type = 'button';
        cancel.textContent = 'Cancel';

        const submit = document.createElement('button');
        submit.type = 'submit';
        submit.textContent = 'OK';

        buttons.append(cancel, submit);
        form.append(label, input, buttons);
        overlay.append(form);
        document.body.append(overlay);
        input.focus();

        const close = (value: string | undefined) => {
            overlay.remove();
            resolve(value);
        };

        cancel.addEventListener('click', () => close(undefined));
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            close(input.value ? `Bearer ${input.value}` : undefined);
        });
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                close(undefined);
            }
        });
    });
}

const AUTH_STORAGE_KEY = 'questionAuthorization';

function getStoredAuthorization(): string | undefined {
    return window.sessionStorage.getItem(AUTH_STORAGE_KEY) ?? undefined;
}

function storeAuthorization(authorization: string): void {
    window.sessionStorage.setItem(AUTH_STORAGE_KEY, authorization);
}

function clearStoredAuthorization(): void {
    window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
}

export const createQuestion = createAppAsyncThunk(
    'questions/createQuestion',
    async (params: ADD_QUESTION_PARAMS) => {
        const mutate = (authorization?: string) =>
            apolloClient.mutate({
                mutation: ADD_QUESTION,
                variables: { ...params },
                context: authorization
                    ? { headers: { authorization } }
                    : undefined,
            });

        try {
            // Reuse the password saved in this browser, if any.
            const response = await mutate(getStoredAuthorization());
            return response.data;
        } catch (error) {
            if (!isUnauthorized(error)) {
                throw error;
            }

            // No saved password or it was rejected — drop it and ask again.
            clearStoredAuthorization();
            const authorization = await promptForPassword();
            if (!authorization) {
                throw error;
            }

            const response = await mutate(authorization);
            storeAuthorization(authorization);
            return response.data;
        }
    }
)

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(createQuestion.fulfilled, (state, action) => {
            if (
                state.loading === 'pending' &&
                state.currentRequestId === action.meta.requestId
            ) {
                state.loading = 'idle'
                state.currentRequestId = undefined
            }
        })
        builder.addCase(createQuestion.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
                state.currentRequestId = action.meta.requestId
            }
        })
        builder.addCase(createQuestion.rejected, (state, action) => {
            if (
                state.loading === 'pending' &&
                state.currentRequestId === action.meta.requestId
            ) {
                state.loading = 'idle'
                state.currentRequestId = undefined
            }
        })
    },
})

export default questionsSlice.reducer;