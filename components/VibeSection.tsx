import React from "react";
import { Section } from "./ui/Section";

export const VibeSection: React.FC = () => {
	return (
		<Section className="bg-black" noPadding>
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[600px]">
				{/* Text Side */}
				<div className="flex flex-col justify-center px-6 py-16 lg:p-24 relative overflow-hidden order-2 lg:order-1">
					{/* Abstract Lines */}
					<div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-brand-yellow/20 rounded-tr-[100px] opacity-50"></div>

					<span className="text-brand-yellow font-display uppercase tracking-widest text-xs mb-4 block">
						Conceito
					</span>
					<h2 className="font-display text-4xl lg:text-7xl font-bold uppercase text-white mb-6 leading-none">
						O <br />
						Ambiente
					</h2>

					<p className="text-white font-sans text-lg lg:text-xl leading-relaxed mb-6 font-medium">
						Experiência nova-iorquina em cada detalhe.
					</p>

					<p className="text-gray-500 font-sans mb-10 leading-relaxed text-sm lg:text-base">
						Paredes escuras, murais de skyline pintados à mão,
						iluminação de filamento e uma trilha sonora curada
						para a noite. A House 190 é o seu refúgio urbano
						para burgers e drinks.
					</p>

					<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
						<div>
							<span className="block text-3xl font-display text-brand-yellow mb-1">
								4
							</span>
							<span className="text-xs uppercase tracking-widest text-gray-400">
								Cidades
							</span>
						</div>
						<div>
							<span className="block text-3xl font-display text-brand-yellow mb-1">
								100%
							</span>
							<span className="text-xs uppercase tracking-widest text-gray-400">
								Artesanal
							</span>
						</div>
					</div>
				</div>

				{/* Image Side Grid */}
				<div className="grid grid-rows-2 h-[750px] lg:h-auto order-1 lg:order-2">
					<div className="relative group overflow-hidden">
						{/* Trying to match the 'Skyline Mural' from Image 4 */}
						<img
							src="/foto-2.png"
							alt="Interior House 190 Detail"
							className="w-full h-full object-cover min-h-0 filter grayscale group-hover:grayscale-0 transition-all duration-700"
						/>
						<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
					</div>
					<div className="grid grid-cols-2">
						<div className="relative group overflow-hidden border-r border-black">
							<img
								src="/foto-3.png"
								alt="Industrial Lights"
								className="w-full h-full object-cover filter sepia-[.5] brightness-75 hover:sepia-0 hover:brightness-100 transition-all duration-700"
							/>
						</div>
						<div className="relative group overflow-hidden bg-brand-steel flex items-center justify-center p-4">
							<div className="text-center p-6 border-4 border-dashed border-white/10 w-full h-full flex flex-col justify-center items-center group-hover:border-brand-yellow/50 transition-colors">
								<span className="font-script text-4xl text-white transform -rotate-12 block mb-2">
									House
								</span>
								<span className="font-display text-4xl text-white font-bold block mb-2 leading-none">
									190
								</span>
								<span className="text-[10px] text-brand-yellow uppercase tracking-[0.3em]">
									Est. 2019
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};
