export type AuthState = Readonly<{
    id: Number | null;
    email: string;
    imageUrl: string;
    authenticated: boolean;
    isAdmin: boolean;
}>;

export type Action = {
    type: string;
    payload: any;
};
