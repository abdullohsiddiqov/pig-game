export namespace IAuth {
  export interface Login {
    username: string;
  }

  export interface IPlayers {
    player1: string;
    player2: string;
    max: string;
  }
}

export namespace Games {
  export interface IGames {
    games: IGame[];
  }

  export interface IGame {
    id: string;
    max: string;
    player1: string;
    player2: string;
    winner: string;
    currentPlayer: string;
  }
}

export namespace IEntity {
  export type data = Games.IGame;

  export interface IResponse {
    success: boolean;
    message: string | null;
    data: data;
  }
}