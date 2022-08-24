export interface IContact {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    city: string;
}

export type ContactCardProps = {
    contact: IContact;
    deleteContact: (id: number) => void;
};