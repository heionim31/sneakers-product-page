export default function RightSide() {
  return (
    <div>
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div>
        <span>$125.00</span>
        <span>50%</span>
      </div>
      <span>$250.00</span>
      <div className="flex">
        <button>-</button>
        <p>0</p>
        <button>+</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
