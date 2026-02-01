import React from "react";
import { Section } from "./ui/Section";
import { MenuItem } from "../types";

const BURGERS: MenuItem[] = [
	{
		id: 1,
		name: "Porteño",
		description:
			"Nosso burger campeão do Festival de Sabores, agora está oficialmente no cardápio da House190.",
		price: "R$ 38,00",
		// Image resembling the "Double Burger" reference
		imageUrl: "/foto-4.png",
		tags: ["Campeão"],
	},
	{
		id: 2,
		name: "Banana Beach",
		description: "Quem já provou sabe: esse sabor tem história.",
		price: "R$ 34,00",
		// Image resembling the tomato/fresh ingredients reference
		imageUrl: "/foto-5.png",
		tags: ["NOSTALGIA"],
	},
	{
		id: 3,
		name: "Pastrami",
		description: "A estrela da casa.",
		price: "R$ 32,00",
		// Image resembling a cheesy/saucy burger
		imageUrl: "/foto-1.png",
		tags: ["Queridinho da casa"],
	},
];

export const MenuHighlight: React.FC = () => {
	return (
		<Section id="menu" className="bg-brand-gray">
			<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
				<div className="w-full md:w-auto">
					<h3 className="text-brand-yellow font-display uppercase tracking-widest mb-2 text-sm">
						Gastronomia Urbana
					</h3>
					<h2 className="text-3xl md:text-6xl font-display font-bold text-white uppercase leading-none">
						Menu{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-700">
							Selection
						</span>
					</h2>
				</div>
				<p className="text-gray-400 max-w-sm text-left md:text-right mt-4 md:mt-0 font-light text-sm md:text-base">
					Ingredientes frescos. Técnica precisa. Sabor
					inegociável.
				</p>
			</div>

			{/* Mobile: 1 column, Desktop: 3 columns */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
				{BURGERS.map((burger) => (
					<div
						key={burger.id}
						className="group relative bg-brand-dark border border-white/5 hover:border-brand-yellow/50 transition-all duration-500 overflow-hidden rounded-sm shadow-xl flex flex-col"
					>
						{/* Image Container - Taller on mobile for visual impact */}
						<div className="aspect-square md:aspect-[4/5] overflow-hidden relative">
							<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 z-10"></div>
							<img
								src={burger.imageUrl}
								alt={burger.name}
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
								{burger.tags.map((tag) => (
									<span
										key={tag}
										className="bg-brand-yellow text-black text-[10px] uppercase tracking-widest px-2 py-1 font-bold shadow-md"
									>
										{tag}
									</span>
								))}
							</div>

							{/* Price floating on image for mobile efficiency */}
							<div className="absolute bottom-4 right-4 z-20">
								<span className="font-display font-bold text-2xl text-white text-shadow">
									{burger.price}
								</span>
							</div>
						</div>

						{/* Content */}
						<div className="p-6 flex-1 flex flex-col">
							<h3 className="text-2xl font-display uppercase text-white mb-2 group-hover:text-brand-yellow transition-colors">
								{burger.name}
							</h3>
							<p className="text-gray-400 text-sm leading-relaxed mb-4 font-light line-clamp-3 flex-1">
								{burger.description}
							</p>

							<button className="w-full py-3 border border-white/20 text-xs font-display uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors">
								Ver Detalhes
							</button>
						</div>
					</div>
				))}
			</div>

			<div className="mt-12 text-center">
				<a
					href="https://beacons.ai/house190"
					target="_blank"
					rel="noreferrer"
					className="inline-block group"
				>
					<span className="inline-block border-2 border-brand-yellow text-brand-yellow px-8 py-3 uppercase tracking-widest font-bold text-sm group-hover:bg-brand-yellow group-hover:text-black transition-all">
						Ver Cardápio Completo
					</span>
				</a>
			</div>
		</Section>
	);
};
