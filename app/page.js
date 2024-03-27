import { chats, menuLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
	return (
		<main className=" h-screen flex flex-row ">
			<div className="w-[282px] p-[20px] flex flex-col">
				<button className="bg-black text-white w-full px-[16px] py-[8px] rounded-[12px] flex items-center justify-center gap-2">
					<Image
						src="/assets/icons/plus.svg"
						height={20}
						width={20}
					/>
					New Chat
				</button>
				<div className="flex flex-col flex-1 ">
					{chats.map((item, index) => (
						<Link href={item.href} key={index} className="link">
							<Image
								src={item.icon}
								height={24}
								width={24}
							/>
							{item.text}
						</Link>
					))}
				</div>
				<div>
					{menuLinks.map((item, index) => (
						<div key={index}>
							<Link href={item.href} className="link">
								<Image src={item.icon} height={24} width={24} />
								{item.label}
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className="flex-1">Main Ccontent</div>
		</main>
	);
};

export default Home;
