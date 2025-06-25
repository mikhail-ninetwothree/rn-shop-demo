export interface UserProfile {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
}

export interface LoginResponse extends UserProfile {
    accessToken: string;
    refreshToken: string;
}