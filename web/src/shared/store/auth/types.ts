export type AuthState = Readonly<{
    id: Number | null;
    email: String;
    imageUrl: String;
    authenticated: Boolean;
}>;

export type Action = {
    type: string;
    payload: any;
};
