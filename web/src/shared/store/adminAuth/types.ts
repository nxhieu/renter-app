export type AdminAuthState = Readonly<{
    id: Number | null;
    authenticated: boolean;
}>;

export type Action = {
    type: string;
    payload: any;
};
