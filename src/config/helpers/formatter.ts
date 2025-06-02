export class Formatter {
  public static currency(value: number): string {
    return new Intl.NumberFormat('en-ES', {
      style: 'currency',
      currency: 'usd',
    }).format(value);
  }
}
