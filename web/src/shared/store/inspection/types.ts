export type InspectionState = Readonly<{
    id: number | null;
    email: string;
    name: string;
    date: Date | null;
}>;

//   email: string;
//   name: string;
//   date: Date;

export type Action = {
    type: string;
    payload: any;
};
