import type { NextPage } from 'next';

const CartPage: NextPage = () => {
  const items = [
    { id: 1, name: 'Nasi Goreng', price: 'Rp25.000' },
    { id: 2, name: 'Mie Ayam', price: 'Rp20.000' },
  ];

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Keranjang Belanja</h1>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="rounded border p-2">
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
