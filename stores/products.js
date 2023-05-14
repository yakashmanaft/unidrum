

export const useProductsStore = definePiniaStore(
  'products-store',
  {
    state : () => (
      {
        currency: 'rub',
        products: [
          {
            id: 1,
            route: 'UNI-1.3-Minor',
            model: 'UNI 1.3 Minor',
            numberОfNotes: 9,
            notes: ['D3', 'F3', 'A3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
            features: 'Без штампов',
            imgs: [
              '/img/UNIDRUM-1.3-Minor.jpg'
            ],
            oldPrice: '',
            currentPrice: 'Под заказ',
          },
          {
            id: 2,
            route: 'UNI-2-Major',
            model: 'UNI 2 Major',
            numberОfNotes: 9,
            notes: ['D3', 'G3', 'A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'A4'],
            features: 'С штампами',
            imgs: [
              '/img/UNIDRUM-1.3-Minor.jpg'
            ],
            oldPrice: 47000,
            currentPrice: 47000,
          },
          {
            id: 3,
            route: 'UNI-2-Minor',
            model: 'UNI 2 Minor',
            numberОfNotes: 9,
            notes: ['D3', 'F3', 'A3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
            features: 'С штампами',
            imgs: [
              '/img/UNIDRUM-1.3-Minor.jpg'
            ],
            oldPrice: 47000,
            currentPrice: 47000,
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