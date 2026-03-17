export type Position =
    | "Meneur"
    | "Arrière"
    | "Ailier"
    | "Ailier fort"
    | "Pivot";

export interface MockPlayer {
    id: number;
    firstname: string;
    lastname: string;
    position: Position | null;
    number: number | null;
    photo: string | null;
    dateOfBirth: string | null;
}

export interface MockTeam {
    id: number;
    label: string;
    players: MockPlayer[];
}

export const mockTeams: MockTeam[] = [
    {
        id: 1,
        label: "Équipe Première",
        players: [
            { id: 1,  firstname: "Thomas",   lastname: "Durand",   position: "Meneur",      number: 4,  photo: null, dateOfBirth: "1995-03-12" },
            { id: 2,  firstname: "Lucas",    lastname: "Martin",   position: "Arrière",     number: 7,  photo: null, dateOfBirth: "1997-07-24" },
            { id: 3,  firstname: "Antoine",  lastname: "Bernard",  position: "Ailier",      number: 11, photo: null, dateOfBirth: "1994-11-05" },
            { id: 4,  firstname: "Karim",    lastname: "Benali",   position: "Ailier fort", number: 14, photo: null, dateOfBirth: "1996-01-18" },
            { id: 5,  firstname: "Julien",   lastname: "Petit",    position: "Pivot",       number: 22, photo: null, dateOfBirth: "1993-09-30" },
            { id: 6,  firstname: "Nicolas",  lastname: "Leroy",    position: "Meneur",      number: 5,  photo: null, dateOfBirth: "1998-04-02" },
            { id: 7,  firstname: "Maxime",   lastname: "Moreau",   position: "Arrière",     number: 8,  photo: null, dateOfBirth: "1996-06-15" },
            { id: 8,  firstname: "Alexis",   lastname: "Roux",     position: "Pivot",       number: 23, photo: null, dateOfBirth: "1995-12-28" },
        ],
    },
    {
        id: 2,
        label: "Équipe Réserve",
        players: [
            { id: 9,  firstname: "Hugo",     lastname: "Simon",    position: "Meneur",      number: 3,  photo: null, dateOfBirth: "1999-02-14" },
            { id: 10, firstname: "Baptiste", lastname: "Laurent",  position: "Ailier",      number: 9,  photo: null, dateOfBirth: "2000-08-07" },
            { id: 11, firstname: "Clément",  lastname: "Michel",   position: "Pivot",       number: 21, photo: null, dateOfBirth: "1998-05-19" },
            { id: 12, firstname: "Dylan",    lastname: "Garcia",   position: "Arrière",     number: 6,  photo: null, dateOfBirth: "2001-11-23" },
            { id: 13, firstname: "Romain",   lastname: "David",    position: "Ailier fort", number: 15, photo: null, dateOfBirth: "1999-03-08" },
            { id: 14, firstname: "Pierre",   lastname: "Bertrand", position: "Arrière",     number: 10, photo: null, dateOfBirth: "2000-07-31" },
        ],
    },
    {
        id: 3,
        label: "U18",
        players: [
            { id: 15, firstname: "Axel",     lastname: "Fontaine", position: "Meneur",      number: 4,  photo: null, dateOfBirth: "2006-01-10" },
            { id: 16, firstname: "Noah",     lastname: "Dupont",   position: "Ailier",      number: 12, photo: null, dateOfBirth: "2007-04-22" },
            { id: 17, firstname: "Enzo",     lastname: "Girard",   position: "Pivot",       number: 20, photo: null, dateOfBirth: "2006-09-14" },
            { id: 18, firstname: "Théo",     lastname: "Bonnet",   position: "Arrière",     number: 7,  photo: null, dateOfBirth: "2007-12-03" },
            { id: 19, firstname: "Mathis",   lastname: "Morel",    position: "Ailier fort", number: 16, photo: null, dateOfBirth: "2006-06-27" },
        ],
    },
    {
        id: 4,
        label: "U15",
        players: [
            { id: 20, firstname: "Léo",      lastname: "Perrin",   position: "Meneur",      number: 5,  photo: null, dateOfBirth: "2009-03-15" },
            { id: 21, firstname: "Nathan",   lastname: "Colin",    position: "Pivot",       number: 21, photo: null, dateOfBirth: "2010-07-08" },
            { id: 22, firstname: "Ethan",    lastname: "Blanc",    position: "Arrière",     number: 8,  photo: null, dateOfBirth: "2009-11-19" },
            { id: 23, firstname: "Maxence",  lastname: "Gros",     position: "Ailier",      number: 11, photo: null, dateOfBirth: "2010-02-25" },
        ],
    },
];
