export interface Userlist {
    name: string;
    _id: number;
    avatar_url: string;
}


export interface ChatData {
    sender: {
       name: string,
        id: string,
        email: string
   };
    receiver: {
        id: string,
        name: string,
        email: string
    };
    messages: any;
}

export interface ShowChat {
  data: string;
}
export interface UserId {
  data: string;
}
