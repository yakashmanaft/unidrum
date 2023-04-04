export const useProductsStore = definePiniaStore(
  'products-store',
  {
    state : () => (
      {
        products: [
          {
            model: 'UNIDRUM 1.3  Minor',
            numberОfNotes: 9,
            Notes: ['D3', 'F3', 'A3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
            features: 'Без штампов'
          },
          {
            model: 'UNIDRUM 2   Major',
            numberОfNotes: 9,
            Notes: ['D3', 'G3', 'A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'A4'],
            features: 'С штампами'
          },
          {
            model: 'UNIDRUM 2  Minor',
            numberОfNotes: 9,
            Notes: ['D3', 'F3', 'A3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
            features: 'С штампами'
          }
        ],
      }
    ),
    getters: {},
    actions: {},
  }
)