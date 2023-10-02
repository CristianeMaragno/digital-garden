import Link from "next/link";
import Image from 'next/image';
import { RouterOutputs } from "~/utils/api";

type PostCard = RouterOutputs["posts"]["getAll"][number];
export const Post = (props: PostCard) => {
  return (
		<div key={props.id} className="block h-96">
			<div className="group h-full w-full overflow-hidden bg-slate-100 wrapper rounded inline-block transform transition duration-500 hover:scale-110">
				<div className="relative flex justify-center items-end isolate h-full w-full">
					<Image
						alt="post cover image"
						src={props.coverImage}
						width={300}
						height={300}
						style={{ width: 'auto', height: '80%' }}
						className="absolute overflow-hidden h-4/5 w-auto inset transparent shadow-xl rounded-t-lg"
					/>
				
					<div className="flex items-center justify-between absolute top-0 w-full p-2">
						<p className="text-slate-500 text-md capitalize lg:inline-block float-left">{props.tag} - {props.title}</p>
						<Link
							className="group-hover:bg-slate-400 group-hover:rounded-full group-hover:text-slate-100 mr-2"
							href={{
								pathname: '/post/[id]', 
								query: { 
								id: props.id
							}
						}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 block lg:inline-block m-1 text-slate-400 float-right group-hover:text-slate-100"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
  );
};