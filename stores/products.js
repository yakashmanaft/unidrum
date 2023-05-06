

export const useProductsStore = definePiniaStore(
  'products-store',
  {
    state : () => (
      {
        currency: 'rub',
        products: [
          {
            id: 1,
            route: 'UNIDRUM-1.3-Minor',
            model: 'UNIDRUM 1.3 Minor',
            numberОfNotes: 9,
            notes: ['D3', 'F3', 'A3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
            features: 'Без штампов',
            imgs: [
              '/img/UNIDRUM-1.3-Minor.jpg'
            ],
            currentPrice: 15700,
          },
          {
            id: 2,
            route: 'UNIDRUM-2-Major',
            model: 'UNIDRUM 2 Major',
            numberОfNotes: 9,
            notes: ['D3', 'G3', 'A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'A4'],
            features: 'С штампами',
            imgs: [
              '/img/UNIDRUM-1.3-Minor.jpg'
            ]
          },
          {
            id: 3,
            route: 'UNIDRUM-2-Minor',
            model: 'UNIDRUM 2 Minor',
            numberОfNotes: 9,
            notes: ['D3', 'F3', 'A3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
            features: 'С штампами',
            imgs: [
              '/img/UNIDRUM-1.3-Minor.jpg'
            ]
          },
          // {
          //   id: 4,
          //   route: 'under-the-order',
          //   model: 'Под заказ',
          //   numberОfNotes: 9,
          //   notes: ['D3', 'F3', 'A3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
          //   features: 'С штампами',
          //   imgs: [
          //     '/img/UNIDRUM-1.3-Minor.jpg'
          //   ]
          // }
        ],
      }
    ),
    getters: {},
    actions: {},
  }
)