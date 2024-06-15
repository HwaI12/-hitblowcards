export interface Card {
  value: string;
  suit: string;
}

export class CardDeck {
  private static suits = {
    red: ['♥', '♦'],
    black: ['♠', '♣'],
    all: ['♥', '♦', '♠', '♣']
  };
  private static values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  public static generateDeck(color: 'red' | 'black' | 'all'): Card[] {
    return this.suits[color].flatMap((suit: string) =>
      this.values.map((value: string) => ({ value, suit }))
    );
  }
}
