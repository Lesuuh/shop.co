// import { useState } from "react";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useCartContext } from "../contexts/CartContext";

function CheckoutPage() {
  const { total } = useCartContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "card", // Default to card payment
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const publicKey = "pk_test_cb1de4a7b591c47611ada824df5ccc7f7649ff32";
  // const totalAmount = 50000;
  const paystackConfig = {
    email: formData.email,
    amount: total * 100, // Paystack works with kobo (NGN 5000 = 500000 kobo)
    publicKey,
    currency: "NGN",
    onSuccess: (response) => {
      console.log("Payment Success:", response);
      alert("Payment Successful! Order placed.");
    },
    onClose: () => {
      alert("Payment process was closed.");
    },
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 w-full mx-auto max-w-[1500px] my-5">
      <h2 className="text-center text-2xl font-semibold">Checkout</h2>
      <form className="flex flex-col space-y-4 my-4 items-center w-full">
        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="border border-slate-200 py-1 px-2 w-full max-w-[400px]"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="border border-slate-200 py-1 px-2 w-full max-w-[400px]"
        />
        <input
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
          className="border border-slate-200 py-1 px-2 w-full max-w-[400px]"
        />
        <input
          name="nearest_landmark"
          placeholder="Nearest Landmark"
          onChange={handleChange}
          required
          className="border border-slate-200 py-1 px-2 w-full max-w-[400px]"
        />
        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
          className="border border-slate-200 py-1 px-2 w-full max-w-[400px]"
        />
        <input
          name="country"
          placeholder="Country"
          onChange={handleChange}
          required
          className="border border-slate-200 py-1 px-2 w-full max-w-[400px]"
        />

        {/* <select
          name="paymentMethod"
          onChange={handleChange}
          className="border border-slate-200 py-1 px-2 w-full max-w-[400px]"
        >
          <option value="card">Credit/Debit Card</option>
          <option value="bank_transfer">Bank Transfer</option>
        </select> */}
        <p className="text-left">Total: {total.toFixed(2)}</p>

        <PaystackButton
          {...paystackConfig}
          className="bg-slate-900 text-white py-2 px-6  rounded-sm"
          text="Pay Now"
        />
      </form>
    </div>
  );
}

export default CheckoutPage;
