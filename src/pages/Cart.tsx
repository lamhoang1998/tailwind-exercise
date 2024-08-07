import { FaXmark } from "react-icons/fa6";

function Cart() {
	return (
		<div className="sm:container">
			<div className="grid grid-cols-[1.5fr_1fr] mt-10 items-start gap-10">
				<div>
					<table className="border-collapse max-w-[680px] w-full border border-solid border-gray-50">
						<thead>
							<tr className="text-left">
								<th className="pl-4">Your product list</th>
								<th className="text-right pr-4">3 items</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="px-4 py-6">
									<div className="grid grid-cols-[80px_auto] gap-3">
										<div className="w-[80px] h-[80px] overflow-hidden rounded-lg ">
											<img
												src="../../images/cart1.png"
												alt="cart"
												className="w-full h-full object-cover object-top block"
											/>
										</div>
										<div className="text-left">
											<h4 className="text-lg text-gray-950 font-medium mb-3">
												Blue Flower Print Crop Top
											</h4>
											<div className="flex gap-2">
												<button className="bg-slate-200 px-2 flex items-center justify-center">
													-
												</button>
												<span>1</span>
												<button className="bg-slate-200 px-2 flex items-center justify-center">
													+
												</button>
											</div>
										</div>
									</div>
								</td>
								<td className="flex flex-col px-4 py-6">
									<FaXmark className="ml-auto mb-5" />
									<div className="ml-auto">
										<span>$12.99</span>
									</div>
								</td>
							</tr>
							<tr>
								<td className="px-4 py-6">
									<div className="grid grid-cols-[80px_auto] gap-3">
										<div className="w-[80px] h-[80px] overflow-hidden rounded-lg ">
											<img
												src="../../images/cart2.png"
												alt="cart"
												className="w-full h-full object-cover object-top block"
											/>
										</div>
										<div className="text-left">
											<h4 className="text-lg text-gray-950 font-medium mb-3">
												Blue Flower Print Crop Top
											</h4>
											<div className="flex gap-2">
												<button className="bg-slate-200 px-2 flex items-center justify-center">
													-
												</button>
												<span>1</span>
												<button className="bg-slate-200 px-2 flex items-center justify-center">
													+
												</button>
											</div>
										</div>
									</div>
								</td>
								<td className="flex flex-col px-4 py-6">
									<FaXmark className="ml-auto mb-5" />
									<div className="ml-auto">
										<span>$9.99</span>
									</div>
								</td>
							</tr>
							<tr>
								<td className="px-4 py-6">
									<div className="grid grid-cols-[80px_auto] gap-3">
										<div className="w-[80px] h-[80px] overflow-hidden rounded-lg ">
											<img
												src="../../images/cart3.png"
												alt="cart"
												className="w-full h-full object-cover object-top block"
											/>
										</div>
										<div className="text-left">
											<h4 className="text-lg text-gray-950 font-medium mb-3">
												Blue Flower Print Crop Top
											</h4>
											<div className="flex gap-2">
												<button className="bg-slate-200 px-2 flex items-center justify-center">
													-
												</button>
												<span>1</span>
												<button className="bg-slate-200 px-2 flex items-center justify-center">
													+
												</button>
											</div>
										</div>
									</div>
								</td>
								<td className="flex flex-col px-4 py-6">
									<FaXmark className="ml-auto mb-5" />
									<div className="ml-auto">
										<span>$29.99</span>
									</div>
								</td>
							</tr>
							<tr>
								<td className="px-4 py-6">
									<div className="grid grid-cols-[80px_auto] gap-3">
										<div className="w-[80px] h-[80px] overflow-hidden rounded-lg ">
											<img
												src="../../images/cart3.png"
												alt="cart"
												className="w-full h-full object-cover object-top block"
											/>
										</div>
										<div className="text-left">
											<h4 className="text-lg text-gray-950 font-medium mb-3">
												Blue Flower Print Crop Top
											</h4>
											<div className="flex gap-2">
												<button className="bg-slate-200 px-2 flex items-center justify-center">
													-
												</button>
												<span>1</span>
												<button className="bg-slate-200 px-2 flex items-center justify-center">
													+
												</button>
											</div>
										</div>
									</div>
								</td>
								<td className="flex flex-col px-4 py-6">
									<FaXmark className="ml-auto mb-5" />
									<div className="ml-auto">
										<span>$32.99</span>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col">
						<h3 className="text-left px-4 mb-7 font-bold">Order Summary</h3>
						<div className="flex justify-between px-4 mb-4">
							<span>Subtotal</span>
							<span>$85.96</span>
						</div>
						<div className="flex justify-between px-4 mb-4">
							<span>Tax</span>
							<span>$6.88</span>
						</div>
						<div className="flex justify-between px-4 mb-6">
							<span>Shipping</span>
							<span>$0.00</span>
						</div>
						<div className="flex justify-between px-4 mb-6">
							<span className="font-bold">Total</span>
							<span className="font-bold">$92.84</span>
						</div>
						<div className="px-4">
							<a href="" className="block bg-black text-white py-3">
								Pay Now
							</a>
						</div>
					</div>
					<div>
						<p className="px-4 text-left font-bold mb-6">Promote Code</p>
						<div className="px-4">
							<input
								type="text"
								className="px-4 py-3 w-full border border-solid border-gray-500 rounded-md"
								placeholder="Enter promote code"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
