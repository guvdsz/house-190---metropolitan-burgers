import React, { useState } from "react";
import { Section } from "./ui/Section";
import {
	MapPin,
	Phone,
	Navigation,
	Clock,
	ExternalLink,
	Smartphone,
	MessageCircle,
} from "lucide-react";
import { LocationInfo } from "../types";

const LOCATIONS: LocationInfo[] = [
	{
		city: "Teixeira de Freitas",
		phone: "(73) 99947-0290",
		whatsappLink: "https://wa.me/5573999470290",
		mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.429420461347!2d-39.7455091!3d-17.5347302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7354408b33d6c71%3A0xc4dbadb3f75acd3b!2sHouse%20Burger!5e0!3m2!1spt-BR!2sbr!4v1769980225391!5m2!1spt-BR!2sbr",
	},
	{
		city: "Eunápolis",
		phone: "(73) 98817-1354",
		whatsappLink: "https://wa.me/5573988171354",
		mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.9509159298327!2d-39.5872994!3d-16.3764626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7366d7ca107b019%3A0x614a563b23f15cb6!2sHouse%20burger%20190!5e0!3m2!1spt-BR!2sbr!4v1769980070121!5m2!1spt-BR!2sbr",
	},
	{
		city: "Itabuna",
		phone: "(73) 99105-4373",
		whatsappLink: "https://wa.me/5573991054373",
		mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962102.3480079705!2d-40.82867536740296!3d-16.157025935022254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739ab95962673ed%3A0x219d9b3cb463264b!2sHouse%20burguer%20190!5e0!3m2!1spt-BR!2sbr!4v1769980295011!5m2!1spt-BR!2sbr",
	},
	{
		city: "Porto Seguro",
		phone: "(73) 99832-3630",
		whatsappLink: "https://wa.me/5573998323630",
		mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962235.2223982872!2d-40.82871602677515!3d-16.14362767021277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7369778d558c249%3A0x73e00bb50496d151!2sHouse%20190%20Burger%20Gourmet!5e0!3m2!1spt-BR!2sbr!4v1769980329852!5m2!1spt-BR!2sbr",
	},
	{
		city: "Itamaraju",
		phone: "(73) 99105-4373",
		whatsappLink: "https://wa.me/5573991054373",
		mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243815.98994281812!2d-39.803603066735!3d-17.28537570441344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x735a5d7b9ddbd3f%3A0x29b57cac9d958e27!2sHouse%20Food%20Park!5e0!3m2!1spt-BR!2sbr!4v1769980402769!5m2!1spt-BR!2sbr",
	},
];

export const Locations: React.FC = () => {
	const [activeCity, setActiveCity] = useState<LocationInfo>(LOCATIONS[0]);

	return (
		<Section
			id="locations"
			className="bg-brand-dark border-t border-brand-steel pb-12 md:pb-28"
		>
			{/* Header */}
			<div className="flex flex-col items-center mb-8 md:mb-12 px-4 text-center">
				<MapPin
					className="text-brand-yellow mb-4"
					size={32}
				/>
				<h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase">
					Nossas{" "}
					<span className="text-brand-yellow">Unidades</span>
				</h2>
				<div className="w-24 h-1 bg-white/10 mt-6 rounded-full"></div>
			</div>

			<div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:h-[600px]">
				{/* MOBILE NAVIGATION: Horizontal Scroll (Tabs) */}
				<div className="lg:hidden w-full overflow-x-auto pb-2 custom-scrollbar flex gap-3 px-4 snap-x no-scrollbar z-20">
					{LOCATIONS.map((loc) => (
						<button
							key={loc.city}
							onClick={() => setActiveCity(loc)}
							className={`
                snap-start flex-shrink-0 px-5 py-3 rounded-sm border text-sm font-display uppercase tracking-wider whitespace-nowrap transition-all duration-300
                ${
					activeCity.city === loc.city
						? "bg-brand-yellow border-brand-yellow text-black font-bold transform scale-105 shadow-[0_0_15px_rgba(255,200,0,0.3)]"
						: "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/30"
				}
              `}
						>
							{loc.city}
						</button>
					))}
				</div>

				{/* DESKTOP NAVIGATION: Vertical List */}
				<div className="hidden lg:flex w-1/3 flex-col gap-3 h-full overflow-y-auto pr-2 custom-scrollbar">
					{LOCATIONS.map((loc) => (
						<div
							key={loc.city}
							onClick={() => setActiveCity(loc)}
							className={`
                group relative p-6 text-left border transition-all duration-300 w-full flex flex-col gap-2 cursor-pointer
                ${
					activeCity.city === loc.city
						? "bg-white/5 border-brand-yellow shadow-[inset_4px_0_0_#FFC800]"
						: "bg-transparent border-white/10 hover:border-white/30 hover:bg-white/[0.02]"
				}
              `}
						>
							{/* Desktop card content */}
							<div className="flex justify-between items-center w-full">
								<h3
									className={`text-lg font-display uppercase transition-colors ${activeCity.city === loc.city ? "text-brand-yellow" : "text-white"}`}
								>
									{loc.city}
								</h3>
								{activeCity.city === loc.city && (
									<Navigation
										size={16}
										className="text-brand-yellow animate-pulse"
									/>
								)}
							</div>

							<div className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300">
								<a
									href={loc.whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 hover:text-brand-yellow transition-colors group/link"
									onClick={(e) =>
										e.stopPropagation()
									} // Prevent card click when clicking link
								>
									<MessageCircle
										size={14}
										className="text-brand-yellow"
									/>
									<span className="font-sans text-sm font-bold underline decoration-transparent group-hover/link:decoration-brand-yellow underline-offset-4 transition-all">
										{loc.phone}
									</span>
								</a>
							</div>
						</div>
					))}

					<div className="mt-auto p-6 border border-dashed border-white/10 text-center rounded bg-black/20 backdrop-blur-sm">
						<div className="flex flex-col items-center gap-2 mb-2">
							<Clock
								size={20}
								className="text-brand-yellow"
							/>
							<span className="text-white font-display uppercase tracking-widest text-sm">
								Horário de Funcionamento
							</span>
						</div>
						<p className="text-gray-400 text-sm font-sans">
							Terça a Domingo
							<br />
							<span className="text-white font-bold text-lg">
								18h às 23h30
							</span>
						</p>
					</div>
				</div>

				{/* MAIN CONTENT AREA */}
				<div className="w-full lg:w-2/3 flex flex-col h-full gap-4 px-4 lg:px-0">
					{/* MOBILE INFO BAR (Quick Action) */}
					<div className="lg:hidden bg-white/5 border border-white/10 p-4 rounded-sm flex items-center justify-between backdrop-blur-sm">
						<div>
							<p className="text-[10px] text-brand-yellow uppercase tracking-widest mb-1">
								Unidade Selecionada
							</p>
							<div className="flex items-center gap-2 text-white font-display uppercase font-medium">
								<MapPin
									size={16}
									className="text-brand-yellow"
								/>
								{activeCity.city}
							</div>
						</div>
					</div>

					{/* MAP CONTAINER */}
					{/* Mobile: Fixed height h-[450px] to cover more screen. Desktop: flexible height */}
					<div className="relative bg-black border border-white/10 rounded-sm overflow-hidden group h-[450px] lg:h-auto lg:flex-grow shadow-2xl">

						<div className="absolute top-4 right-4 z-10 lg:hidden">
							<a
								href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeCity.city + " House 190")}`}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-black/80 backdrop-blur text-brand-yellow text-[10px] font-display uppercase tracking-widest px-3 py-1 border border-brand-yellow/30 flex items-center gap-1 shadow-lg"
							>
								App Externo <ExternalLink size={10} />
							</a>
						</div>

						{/* Decorative Lines */}
						<div className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow/50 z-10"></div>
						<div className="absolute top-0 right-0 w-1 h-20 bg-brand-yellow/50 z-10"></div>

						<iframe
							src={activeCity.mapSrc}
							width="100%"
							height="100%"
							style={{
								border: 0,
								filter: "grayscale(0%) contrast(1.1)",
							}}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title={`Mapa de ${activeCity.city}`}
							className="w-full h-full transition-opacity duration-500 opacity-100"
						></iframe>
					</div>

					{/* RESTORED CONTACTS LIST (Mobile Only) */}
					<div className="lg:hidden mt-4 pt-6 border-t border-white/10">
						<h3 className="text-white font-display uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
							<Smartphone
								size={16}
								className="text-brand-yellow"
							/>
							Contatos das Unidades
						</h3>
						<div className="grid grid-cols-1 gap-3">
							{LOCATIONS.map((loc) => (
								<div
									key={loc.city}
									className={`
                      p-4 rounded flex justify-between items-center border transition-all duration-300
                      ${activeCity.city === loc.city ? "bg-white/10 border-brand-yellow/30" : "bg-white/5 border-white/5"}
                    `}
									onClick={() => setActiveCity(loc)}
								>
									<div className="flex flex-col">
										<span
											className={`font-display uppercase text-sm ${activeCity.city === loc.city ? "text-brand-yellow" : "text-gray-300"}`}
										>
											{loc.city}
										</span>
										<span className="text-xs text-gray-500 font-sans mt-1">
											{loc.phone}
										</span>
									</div>
									<a
										href={loc.whatsappLink}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) =>
											e.stopPropagation()
										}
										className="p-3 bg-black rounded-full text-brand-yellow border border-white/10 hover:border-brand-yellow transition-colors"
									>
										<MessageCircle size={16} />
									</a>
								</div>
							))}
						</div>
					</div>

					{/* MOBILE HOURS FOOTER */}
					<div className="lg:hidden text-center mt-4 p-4 bg-black/40 border border-dashed border-white/10 rounded">
						<p className="text-gray-400 text-xs">
							<span className="block text-brand-yellow uppercase tracking-widest mb-1 font-bold">
								Horário
							</span>
							Terça a Domingo • 18h às 23h30
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
};
